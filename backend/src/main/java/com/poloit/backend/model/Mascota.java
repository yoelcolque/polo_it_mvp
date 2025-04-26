package com.poloit.backend.model;

import jakarta.persistence.*;

@Entity
public class Mascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String especie;

    @ManyToOne
    @JoinColumn(name = "usuario_id") // FK
    private User duenio;

    public Mascota() {}

    public Mascota(String nombre, String especie, User duenio) {
        this.nombre = nombre;
        this.especie = especie;
        this.duenio = duenio;
    }

    // Getters y Setters
    public Long getId() { return id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEspecie() { return especie; }
    public void setEspecie(String especie) { this.especie = especie; }

    public User getDuenio() { return duenio; }
    public void setDuenio(User duenio) { this.duenio = duenio; }
}
