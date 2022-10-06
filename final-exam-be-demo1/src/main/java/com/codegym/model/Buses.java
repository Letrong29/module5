package com.codegym.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "busses")
public class Buses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String begin;

    private String end;

    private String startTime;

    private String endTime;

    @ManyToMany(mappedBy = "busesList")
    private List<Bus> busList;
}
