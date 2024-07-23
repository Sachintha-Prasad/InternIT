package com.internit.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Internship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String location;
    private String description;

    @ElementCollection
    private List<String> requirements;

    @ElementCollection
    private List<String> skills;

    private String duration;
    private String startDate;
    private String image;
    private String postedTime;
    private String type;
    private String salary;
    private String brief;
}
