package graph

import "github.com/AlbertRossJoh/planning-poker-backend/graph/model"

var (
	sessionChooser  = make(map[string]map[string]*model.UserCard)
	cardsPlayedChan = make(chan []*model.UserCard, 1024)
)

func getUsrCards(session string) []*model.UserCard {
	if sessionChooser[session] == nil {
		sessionChooser[session] = make(map[string]*model.UserCard)
	}
	acc := make([]*model.UserCard, 0)
	for _, val := range sessionChooser[session] {
		acc = append(acc, val)
	}
	return acc
}
