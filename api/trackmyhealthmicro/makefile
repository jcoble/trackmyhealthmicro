postgres:
	docker run --name postgres14.3 -p 5444:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:14.3-alpine

terminateconn:
	docker exec -it postgres14.3 "SELECT pg_terminate_backend(pg_stat_activity.pid FROM pg_stat_activity WHERE pg_stat_activity.datname = 'track_my_health' AND pid <> pg_backend_pid();" --username=root --owner=root track_my_health

createdb:
	docker exec -it postgres14.3 createdb --username=root --owner=root track_my_health

dropdb:
	docker exec -it postgres14.3 dropdb --username=root track_my_health

migrateup:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5444/track_my_health?sslmode=disable" -verbose up

migrateup1:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5444/track_my_health?sslmode=disable" -verbose up 1

migratedown:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5444/track_my_health?sslmode=disable" -verbose down

migratedown1:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5444/track_my_health?sslmode=disable" -verbose down 1

sqlc:
	sqlc generate

test:
	go test -v -cover ./...

server:
	go run main.go

mock:
	mockgen -package mockdb -destination db/mock/store.go github.com/jcoble/simplebank/db/sqlc Store

.PHONY: postgres createdb dropdb migrateup migratedown sqlc server mock
