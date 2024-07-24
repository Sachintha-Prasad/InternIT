package com.internit.backend.controller;

import com.internit.backend.entity.Internship;
import com.internit.backend.service.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/internships")
@CrossOrigin
public class InternshipController {
    @Autowired
    private InternshipService internshipService;

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Internship> getInternshipById(@PathVariable Long id) {
        Optional<Internship> internship = internshipService.findById(id);
        return internship.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping
    public ResponseEntity<Internship> createInternship(@RequestBody Internship internship) {
        Internship savedInternship = internshipService.save(internship);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedInternship);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Internship> updateInternship(@PathVariable Long id, @RequestBody Internship internshipDetails) {
        Optional<Internship> optionalInternship = internshipService.findById(id);
        if (optionalInternship.isPresent()) {
            Internship internship = optionalInternship.get();
            internship.setTitle(internshipDetails.getTitle());
            internship.setCompany(internshipDetails.getCompany());
            internship.setLocation(internshipDetails.getLocation());
            internship.setDescription(internshipDetails.getDescription());
            internship.setRequirements(internshipDetails.getRequirements());
            internship.setSkills(internshipDetails.getSkills());
            internship.setDuration(internshipDetails.getDuration());
            internship.setStartDate(internshipDetails.getStartDate());
            internship.setImage(internshipDetails.getImage());
            internship.setPostedTime(internshipDetails.getPostedTime());
            internship.setType(internshipDetails.getType());
            internship.setSalary(internshipDetails.getSalary());
            internship.setBrief(internshipDetails.getBrief());
            Internship updatedInternship = internshipService.save(internship);
            return ResponseEntity.ok(updatedInternship);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInternship(@PathVariable Long id) {
        internshipService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
