# Etapa 1: build
FROM eclipse-temurin:17-jdk-alpine as builder

WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

# Etapa 2: producción
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE ${BACKEND_PORT}

ENTRYPOINT ["java", "-jar", "app.jar"]
