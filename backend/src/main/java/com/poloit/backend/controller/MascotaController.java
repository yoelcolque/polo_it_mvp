package com.poloit.backend.controller;

import com.poloit.backend.dto.MascotaDTO;
import com.poloit.backend.model.Mascota;
import com.poloit.backend.service.MascotaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mascotas")
@CrossOrigin(origins = "*")
public class MascotaController {

    private final MascotaService service;

    public MascotaController(MascotaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Mascota> crearMascota(@RequestBody MascotaDTO dto) {
        Mascota mascota = service.crearMascota(dto.getNombre(), dto.getEspecie(), dto.getUsuarioId());
        return ResponseEntity.ok(mascota);
    }

    @GetMapping
    public List<Mascota> listarMascotas() {
        return service.getAllMascotas();
    }
}
