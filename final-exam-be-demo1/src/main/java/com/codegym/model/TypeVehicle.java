package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "type_vehicle")
public class TypeVehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "typeVehicle")
    private List<Bus> busList;
}
