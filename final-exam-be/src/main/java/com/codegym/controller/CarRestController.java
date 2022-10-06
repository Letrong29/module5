package com.codegym.controller;

import com.codegym.model.Car;
import com.codegym.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/car")
public class CarRestController {

    @Autowired
    private ICarService iCarService;

    @GetMapping("/home")
    public ResponseEntity<Page<Car>> getAll(@PageableDefault(size = 2)Pageable pageable) {

        return new ResponseEntity<>(this.iCarService.findAll(pageable), HttpStatus.OK);
    }
}
