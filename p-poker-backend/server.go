package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/AlbertRossJoh/planning-poker-backend/graph"
)

const defaultPort = "8080"

//	func cors(ctx context.Context, next graphql.OperationHandler) graphql.ResponseHandler {
//		return func(ctx2 context.Context) *graphql.Response {
//			return nil
//		}
//	}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Control-Allow-Credentials", "true")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		next.ServeHTTP(w, r)
	})
}
func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))
	// srv.AroundOperations(cors)
	http.Handle("/", playground.Handler("GraphQL playground", "/graphql"))
	http.Handle("/query", cors(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
