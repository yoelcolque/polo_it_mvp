package com.poloit.backend.service;

import com.poloit.backend.model.Mascota;
import com.poloit.backend.model.User;
import com.poloit.backend.repository.MascotaRepository;
import com.poloit.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MascotaService {

    private final MascotaRepository mascotaRepo;
    private final UserRepository userRepo;

    public MascotaService(MascotaRepository mascotaRepo, UserRepository userRepo) {
        this.mascotaRepo = mascotaRepo;
        this.userRepo = userRepo;
    }

    public Mascota crearMascota(String nombre, String especie, Long usuarioId) {
        User user = userRepo.findById(usuarioId).orElseThrow(() ->
                new RuntimeException("Usuario no encontrado con ID: " + usuarioId)
        );

        Mascota mascota = new Mascota(nombre, especie, user);
        return mascotaRepo.save(mascota);
    }

    public List<Mascota> getAllMascotas() {
        return mascotaRepo.findAll();
    }
}
