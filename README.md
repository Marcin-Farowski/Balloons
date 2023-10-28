# Balloons

## Docker PostgreSQL container creation
Pull the image:

`docker pull postgres:alpine`

Create the container:

`docker run --name postgres-balloons -e POSTGRES_PASSWORD=Khavar.6 -d -p 5432:5432 postgres:alpine`
