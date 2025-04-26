package com.poloit.backend.repository;

import com.poloit.backend.model.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MascotaRepository extends JpaRepository<Mascota, Long> {}
