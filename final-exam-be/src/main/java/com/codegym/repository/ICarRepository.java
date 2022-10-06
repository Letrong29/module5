package com.codegym.repository;

import com.codegym.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICarRepository extends JpaRepository<Car, Integer> {

    @Query(value = "SELECT * FROM car", nativeQuery = true, countQuery = "SELECT count(*) FROM car")
    Page<Car> findAllCar(Pageable pageable);

}
