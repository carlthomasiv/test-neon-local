# Test Neon Local

Test repository for [Neon Local](https://hub.docker.com/r/neondatabase/neon_local)

## Getting started

1. Rename `.env.example` to `.env` and add required values

2. Install dependencies

```shell
npm install
```

3. Start container

```shell
docker compose usp
```

4. Visit [http://localhost:4173/](http://localhost:4173/)

## src/db.js

The database connection is created using the Neon Serverless driver

```javascript
import 'dotenv/config';

import { neon, neonConfig } from '@neondatabase/serverless';
neonConfig.fetchEndpoint = 'http://db:5432/sql';

export const sql = neon('postgres://neon:npg@db:5432/neondb');
```

## docker-compose.yml

Contains necessary `DRIVER` value set to `serverless`

```yml
services:
  app:
    build: .
    ports:
      - '4173:4173'
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db

  db:
    image: neondatabase/neon_local:latest
    ports:
      - '5432:5432'
    environment:
      NEON_API_KEY: ${NEON_API_KEY}
      NEON_PROJECT_ID: ${NEON_PROJECT_ID}
      DRIVER: serverless
```

## .env

```shell
DATABASE_URL=postgres://neon:npg@db:5432/neondb
NEON_API_KEY=<api-key>
NEON_PROJECT_ID=<project-id>
```

### Notes

There is an additional route for `/book/:bookId`, this is specific to the database. Routes can be added/amended in `server-dev.js` to suit the needs of the database. Simliar for `src/function.js` / `getBookData`, change as required.
