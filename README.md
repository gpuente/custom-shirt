## Setup:

Rename `apps/server/example.env` to `.env` and add your config:

- `OPENAI_API_KEY`: your OpenAI API key.
- `PORT`: port where server api is exposed.

**Build and run services:**
(if you don't want to rebuild the images, you can omit the `--build` flag)

```bash
docker-compose --env-file ./apps/server/.env up -d --build
```

**Stop and delete container:**

```bash
docker-compose --env-file ./apps/server/.env down
```

**Stop containers:**

```bash
docker-compose --env-file ./apps/server/.env stop
```

**Start stopped containers:**

```bash
docker-compose --env-file ./apps/server/.env start
```
