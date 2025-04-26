
VISION GLOBAL DEL PROYECTO MVP

DECISION DE ARQUITECTURA

    Separar responsabilidades con tecnologías especializadas:
    
        Frontend	        Next.js (React + Tailwind + Typscipt)	    Modularidad, SSR/SSG, velocidad de desarrollo, SEO, experiencia visual
        Backend	          Spring Boot (Java)	                      Lógica sólida, seguridad, estructura de datos
        Base de Datos	    PostgreSQL	                              Estabilidad, madurez, integración


FLUJO DE CONEXIÓN ENTRE NEXT.JS Y SPRING BOOT

  1- Frontend y Backend
 
        El usuario interactúa con la interfaz: un formulario, un botón, un input.
        Al enviar los datos, Next.js prepara una llamada HTTP.
        Para realizarlo la comunicacion usa Axios.

    ¿Qué hace Axios?
        Empaqueta los datos en formato JSON.
        Envía una petición HTTP (por ejemplo, POST /api/users) hacia el backend.
        Usa como base la URL configurada en /frontend/.env.local:

            NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
    
    =>  IMPOR! Cabe aclarar que no trabajamos con los DTOs y no con la entidad pura en el flujo de comunicion.
        
        CASO 1
          Usuario → Frontend (Axios) → 
          Envía un DTO de Request → 

          Controller (recibe DTO) → 
          Service (convierte DTO en Entity) → 
          Repository (guarda Entity en PostgreSQL)
        
        CASO 2
          ↓ (respuesta)

          Repository (devuelve Entity) → 
          Service (convierte Entity en DTO de Response) → 
          Controller (devuelve DTO limpio al Frontend) → 
          Usuario ve solo lo que debe ver.


  2- Base de Datos: PostgreSQL

        Recibe las consultas SQL generadas por Hibernate (Hibernate detecta los JPA).
        => Guarda los datos de forma estructurada y segura.
  

CONCLUSIÓN:

    Next.js construye la interfaz y la comunicación.
    Axios transporta en formato JSON.
    Spring Boot recibe, procesa y valida la petición.
    DTOs protegen y ordenan los datos que fluyen.
    JPA + Hibernate traducen objetos en consultas SQL.
    PostgreSQL guarda los datos.

RESUMEN:

    Usuario → Frontend (Next.js + Axios) → API REST → Backend (Spring Boot → JPA → Hibernate) → PostgreSQL


DISEÑO ESTRUCTURAL

    Estructura del Backend

    /backend
        controller/               → Manejo de rutas y controladores REST
        service/                  → Lógica
        model/                    → Entidades de Base de Datos (@Entity)
        repository/               → Acceso a datos (JPA Repositories)
        config/                   → Configuraciones globales (CORS, Seguridad, Beans)
        dto/                      → Data Transfer Object
        BackendApplication.java   → Main Class (Spring Boot Entry Point)

    Estructura del Frontend

    /frontend
        app/                      → Páginas Next.js
        components/               → Componentes reutilizables de UI
        services/                 → Conexión a APIs (Axios)
        config/                   → Configuración de entorno y APIs
        public/                   → Imágenes estáticas
        styles/                   → Tailwind / CSS
        .env.local                → Variables públicas (NEXT_PUBLIC_)


CONFIGURACION DOCKER Y DEVOPS

    Cabe aclarar que se emplearon versiones ligeras pero estables.

    Dockerfiles
        
          Frontend	      build → production	    node:18.20-slim
          Backend	        build → production	    eclipse-temurin:17-jre-alpine
          PostgreSQL	    directa	                postgres:15-alpine


    docker-compose.yml

      Orquestación completa de servicios:

          PostgreSQL      como contenedor persistente
          Backend         aislado
          Frontend        aislado


CONFIGURACION VARIABELS DE ENTORNO

    En tales archivos se define diversos puertos.
      
        .env	                      Variables de todo el sistema
        frontend/.env.local	        API pública para Axios
    

RAMAS GIT 

    Dedinicion ideal del uso de ramas  
        
        main	              Código en producción
          test	            Ramas para testar antes de merguear a produccion (main)
            develop	        Rama de integración
              feature	      Ramas por funcionalidad
            
    

Conclusión

    Este proyecto busca ser modular, versatil, escalable y preparado para crecimiento.
    




