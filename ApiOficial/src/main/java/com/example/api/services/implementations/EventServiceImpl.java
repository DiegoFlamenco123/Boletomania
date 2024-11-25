package com.example.api.services.implementations;

import com.example.api.models.entities.*;
import com.example.api.models.entities.dtos.GetEventDTO;
import com.example.api.models.entities.dtos.GetMainPageEventDTO;
import com.example.api.models.entities.dtos.GetTierForEventDTO;
import com.example.api.models.entities.dtos.SaveEventDTO;
import com.example.api.repositories.*;
import com.example.api.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private OrganizerRepository organizerRepository;

    @Autowired
    private SponsorRepository sponsorRepository;

    @Autowired
    private SiteRepository siteRepository;

    @Autowired
    private TierRepository tierRepository;

    @Override
    public void save(SaveEventDTO event) throws Exception {
        Organizer organizer = organizerRepository.findById(event.getOrganizer()).orElseThrow(() -> new Exception("Organizer not found"));
        Sponsor sponsor = sponsorRepository.findById(event.getSponsor()).orElseThrow(() -> new Exception("Sponsor not found"));
        Site site = siteRepository.findById(event.getSite()).orElseThrow(() -> new Exception("Site not found"));

        Event newEvent = new Event(
                organizer,
                sponsor,
                site,
                event.getTitle(),
                event.getDate(),
                event.getDuration()
        );

        eventRepository.save(newEvent);
    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public GetEventDTO findOneById(String id) {
        Event event = eventRepository.findByTitle(id);

        List<Tier> tiers = tierRepository.findAllByEvent(event);
        List<GetTierForEventDTO> tiersEvent = new ArrayList<>();

        for(Tier tier : tiers){
            tiersEvent.add(new GetTierForEventDTO(
                    tier.getCode().toString(),
                    tier.getName(),
                    tier.getPrice()
            ));
        }


        GetEventDTO eventDTO = new GetEventDTO(
                event.getTitle(),
                event.getSite().getName(),
                tiersEvent,
                event.getDate().toString()
        );

        return eventDTO;
    }

    @Override
    public Event findByTitle(String title) {
        return eventRepository.findByTitle(title);
    }

    @Override
    public List<GetMainPageEventDTO> getMainAll() {
        List<Event> events = eventRepository.findAll();

        List<GetMainPageEventDTO> eventsDTO = new ArrayList<>();

        for(Event event : events){
            eventsDTO.add(new GetMainPageEventDTO(
                    event.getTitle()
            ));
        }

        return eventsDTO;
    }

    @Override
    public List<Event> findAll() {
        return null;
    }

    @Override
    public void updateEvent(Event event) {

    }

    @Override
    public void updateTitle(String title) {

    }

    @Override
    public void updateDate(Timestamp date) {

    }

    @Override
    public void updateHour(String hour) {

    }

    @Override
    public void updateDuration(String duration) {

    }
}
