package com.example.api.services.implementations;

import com.example.api.models.entities.Token;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.GetUserDTO;
import com.example.api.models.entities.dtos.SaveUserDTO;
import com.example.api.repositories.TokenRepository;
import com.example.api.repositories.UserRepository;
import com.example.api.services.UserService;
import com.example.api.utils.JWTTools;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private JWTTools jwtTools;

    @Autowired
    private TokenRepository tokenRepository;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void save(SaveUserDTO user) throws Exception {
        User newUser = new User(
                user.getEmail(),
                user.getName(),
                user.getPassword()
        );

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userRepository.save(newUser);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void deleteByEmail(String value) throws Exception {
        userRepository.deleteByUsername(value);

    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void deleteById(String id) throws Exception {

    }

    @Override
    public GetUserDTO findOneByEmail(String value) {
        User user = userRepository.findOneByUsername(value);

        if (user != null) {
            return new GetUserDTO(
                    user.getName(),
                    user.getUsername()
            );
        }

        return null;
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findOneByUsername(email);
    }

    @Override
    public User findByEmailAndPassword(String email, String password) {
        String encodedPassword = passwordEncoder.encode(password);

        System.out.println("La contraseña encriptada es la siguiente" + encodedPassword);
        return userRepository.findByUsernameAndPassword(email, encodedPassword);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void updatePassword(String password, String email) {
        User user =  userRepository.findOneByUsername(email);

        if (user != null) {
            user.setPassword(password);
            userRepository.save(user);
        }
    }

    @Override
    public void updateEmail(String email) {

    }

    @Override
    public void activateUser(String email) {
        User user =  userRepository.findOneByUsername(email);

        if (user != null) {
            if(!user.getActive()){
                user.setActive(true);
                userRepository.save(user);
            }
            else {
                user.setActive(false);
                userRepository.save(user);
            }
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public Token registerToken(User user) throws Exception {
        cleanTokens(user);

        String tokenString = jwtTools.generateToken(user);
        Token token = new Token(tokenString, user);

        tokenRepository.save(token);

        return token;
    }

    @Override
    public Boolean isTokenValid(User user, String token) {
        try {
            cleanTokens(user);
            List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

            tokens.stream()
                    .filter(tk -> tk.getContent().equals(token))
                    .findAny()
                    .orElseThrow(() -> new Exception());

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void cleanTokens(User user) throws Exception {
        List<Token> tokens = tokenRepository.findByUserAndActive(user, true);

        tokens.forEach(token -> {
            if(!jwtTools.verifyToken(token.getContent())) {
                token.setActive(false);
                tokenRepository.save(token);
            }
        });

    }

    @Override
    public User findUserAuthenticated() {
        String username = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository.findOneByUsername(username);
    }
}
