# flix-server

The backend for https://github.com/flyingsl0ths/flix



## Environment variables :white_square_button:

`FLIX_MONGODB_URL`: The mongodb connection string

`FLIX_SERVER_PORT`: The port on which the server will listen to incoming requests on



## Setup :computer:

Run `FLIX_MONGODB_URL="..." FLIX_SERVER_PORT="..." docker-compose up` 

or

```bash
#!/usr/bin/env bash

export FLIX_MONGODB_URL="..."
export FLIX_SERVER_PORT="..."
docker-compose up
```
