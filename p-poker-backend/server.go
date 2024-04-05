package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/AlbertRossJoh/planning-poker-backend/graph"
)

const defaultPort = "8080"

func cors(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
	return func(ctx2 context.Context) *graphql.Response {
		return nil
	}
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))
	// srv.AroundOperations(cors)
	http.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
