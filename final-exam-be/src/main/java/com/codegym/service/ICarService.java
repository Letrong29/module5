package com.codegym.service;

import com.codegym.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {

    Page<Car> findAll(Pageable pageable);
}
