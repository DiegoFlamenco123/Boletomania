package com.example.api.models.entities.dtos;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SaveUserxRoleDTO {
    User user;
    Role role;
}
