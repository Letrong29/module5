package com.codegym.controller;

import com.codegym.model.Car;
import com.codegym.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/car")
public class CarController {

    @Autowired
    private ICarService iCarService;

    @GetMapping("/")
    public String getAll(@PageableDefault(size = 5)Pageable pageable) {

        Page<Car> cars = this.iCarService.findAll(pageable);

        return "index";
    }
}
