package com.poloit.backend.dto;

public class MascotaDTO {
    private String nombre;
    private String especie;
    private Long usuarioId;

    public MascotaDTO() {}

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getEspecie() { return especie; }
    public void setEspecie(String especie) { this.especie = especie; }

    public Long getUsuarioId() { return usuarioId; }
    public void setUsuarioId(Long usuarioId) { this.usuarioId = usuarioId; }
}
