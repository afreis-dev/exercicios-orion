# exercicios-orion

Exercícios de Docker e Docker Compose.

| Exercício | Pasta | Como rodar | Teste |
|---|---|---|---|
| 1 | `docker/exercicio-1` | `docker compose up --build` | http://localhost:3000 |
| 2 | `docker/exercicio-2` | `docker compose up -d --build` | http://localhost:3000/items |
| 3 (dev) | `docker/exercicio-3` | `docker compose -f docker-compose.dev.yml up -d --build` | http://localhost:3000/health |
| 3 (prod) | `docker/exercicio-3` | `docker compose -f docker-compose.prod.yml up -d --build` | http://localhost:3001/health |
| Extra | `docker/exercicio-extra` | `docker compose up -d --build` | http://localhost:3000/health e pgAdmin em http://localhost:8080 |

Para parar: `docker compose down` (no exercício 3, use o mesmo `-f` do `up`).

## Branches

- `main`: entrega final
- `develop`: integração
- `feature/*`: uma branch por exercício
