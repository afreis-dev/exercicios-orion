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

## Banco de dados

Suba o Postgres e o Mongo:

```bash
docker compose -f banco-de-dados/docker-compose.yml up -d
```

| Exercício | Arquivo | Banco |
|---|---|---|
| 1 | `banco-de-dados/exercicio-1/exercicio-1.sql` | PostgreSQL `orion_db` |
| 2 | `banco-de-dados/exercicio-2/exercicio-2.sql` (depois do 1) | PostgreSQL `orion_db` |
| 3 | `banco-de-dados/exercicio-3/exercicio-3.js` | MongoDB `orion_db`, coleção `posts` |
| 4 | `banco-de-dados/exercicio-4/exercicio-4.js` (depois do 3) | MongoDB `orion_db`, coleção `posts` |

SQL:

```bash
psql "postgresql://orion_user:orion_password@localhost:5432/orion_db" -f banco-de-dados/exercicio-1/exercicio-1.sql
```

Mongo:

```bash
mongosh "mongodb://orion_admin:orion_admin_pass@localhost:27017/" --file banco-de-dados/exercicio-3/exercicio-3.js
```
