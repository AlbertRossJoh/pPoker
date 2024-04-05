export interface UserCard {
    user: string,
    cardNum: Number,
}
export class CardChooser{
    private chosenCards: UserCard[] = [];
    constructor(){}


    public AddCard(userNum: UserCard) {
        this.chosenCards.push(userNum)
    }

    public GetCards(): UserCard[]{
        return this.chosenCards
    }
}