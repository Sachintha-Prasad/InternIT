package com.internit.backend.service;

import com.internit.backend.entity.Internship;
import com.internit.backend.repository.InternshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InternshipService {
    @Autowired
    private InternshipRepository internshipRepository;

    public List<Internship> findAll() {
        return internshipRepository.findAll();
    }

    public Optional<Internship> findById(Long id) {
        return internshipRepository.findById(id);
    }

    public Internship save(Internship internship) {
        return internshipRepository.save(internship);
    }

    public void deleteById(Long id) {
        internshipRepository.deleteById(id);
    }
}
