# Etapa 1: Build del frontend
FROM node:18.20-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Imagen final para producción
FROM node:18.20-slim

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

EXPOSE ${FRONTEND_PORT}

CMD ["npm", "run", "start"]
