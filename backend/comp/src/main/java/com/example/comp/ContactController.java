package com.example.comp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ResponseEntity<ContactMessage> submitContactMessage(@RequestBody ContactMessage contactMessage) {
        ContactMessage savedMessage = contactMessageRepository.save(contactMessage);
        return ResponseEntity.ok(savedMessage);
    }

    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        List<ContactMessage> messages = contactMessageRepository.findAll();
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/respond/{id}")
    public ResponseEntity<String> respondToMessage(@PathVariable Long id, @RequestBody String response) {
        Optional<ContactMessage> messageOptional = contactMessageRepository.findById(id);
        if (messageOptional.isPresent()) {
            ContactMessage message = messageOptional.get();
            // Logic to send an email response to the user (this is just a placeholder)
            return ResponseEntity.ok("Response sent successfully.");
        } else {
            return ResponseEntity.status(404).body("Message not found.");
        }
    }
}
