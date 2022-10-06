package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "bus")
public class Bus {

    @Id
    private String licensePlates;

    @ManyToMany
    @JoinTable(name = "buses_detail",
            joinColumns = @JoinColumn(name = "bus_id"),
            inverseJoinColumns = @JoinColumn(name = "buses_id"))
    private List<Buses> busesList;

    @ManyToOne()
    @JoinColumn(name = "agency_id", referencedColumnName = "id")
    private Agency agency;

    @ManyToOne
    @JoinColumn(name = "type_vehicle_id", referencedColumnName = "id")
    private TypeVehicle typeVehicle;
}
