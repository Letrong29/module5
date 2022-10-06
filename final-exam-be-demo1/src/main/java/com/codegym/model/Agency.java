package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "agency")
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String email;

    @OneToMany(mappedBy = "agency")
    private List<PhoneNumber> phoneNumberList;

    @OneToMany(mappedBy = "agency")
    private List<Bus> busList;
}
