# Build stage
FROM node:18-alpine as builder
WORKDIR /app
COPY src/ .
RUN npm install && npm run build

# Serve stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/public public
COPY --from=builder /app/.next/standalone/. .
COPY --from=builder /app/.next/static .next/static
