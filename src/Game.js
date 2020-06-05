'use strict'

class Game {
    constructor(){
        this.gamingFild = document.querySelector(".gaming-fild");
        this.dillerCards = document.querySelector(".diller-cards");
        this.playerCards = document.querySelector(".player-cards");
        this.btnStart = document.querySelector(".btn");
        this.btnNotGet = document.querySelector(".btn-not-get");

        this.allCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        this.dillerCardsArr = [];
        this.playerCardsArr =[];
    }

    start(){
        //Здесь в начале диллеру выдается карта, не стал создавать новый метод потому что с метода start начинается игра.
        this.dillerCardsArr.push(this.randomCards())
        let div = document.createElement("div")
        div.classList.add("diller-cards-position");
        div.innerHTML = this.dillerCardsArr[0];
        this.dillerCards.prepend(div);

        this.btnStart.addEventListener('click', this.getCardsPlayer.bind(this));
    }

    notGet(){
        this.btnNotGet.addEventListener('click', this.endGame.bind(this));
    }

    endGame(){
        while(this.getSumCard(this.dillerCardsArr) < 19){
            this.getCardsDiller();
        }
        setTimeout(() => { 
            this.isGameWon();
            this.dillerCards.innerHTML = "";
            this.playerCards.innerHTML = "";
            this.playerCardsArr.forEach((el, key) => {
                this.playerCardsArr.splice(key)
            })
            this.dillerCardsArr.forEach((el, key) => {
                this.dillerCardsArr.splice(key)
            })
            this.start();
        }, 1000);

    }

    randomCards(){
        return this.allCards[Math.floor(Math.random() * 12)]
        
    }

    isGameWon(){
        if(this.getSumCard(this.playerCardsArr) == 21){
            alert("У ваc Black Jack");
            return;
        } else if (this.getSumCard(this.dillerCardsArr) == 21){
            alert("У диллера Black Jack. Вы проиграли");
            return;
        } 

        if(this.getSumCard(this.playerCardsArr) > 21){
            alert('Вы проиграли');
            return;
        } else if(this.getSumCard(this.dillerCardsArr) > 21){
            alert('Вы выиграли');
            return;
        } 

        if(this.getSumCard(this.playerCardsArr) == this.getSumCard(this.dillerCardsArr)){
            alert('Ничья');
            return;
        } else if(this.getSumCard(this.playerCardsArr) > this.getSumCard(this.dillerCardsArr)){
            alert('Вы выиграли');
            return;
        } else if(this.getSumCard(this.playerCardsArr) < this.getSumCard(this.dillerCardsArr)){
            alert('Вы проиграли');
            return;
        }    
    }

    getSumCard(arr){
        let sum = 0;
		parseInt(sum); 
		for(let i = 0;i < arr.length; i++) {
			if(arr[i] != 'A'){
		        if ((arr[i] == "J") || (arr[i] == "Q") || (arr[i] == "K")) {
		            sum = sum + 10;
		        }else{
		        	sum = sum + parseInt(arr[i]);
		        }
	    	}
		}

		for( let i = 0; i < arr.length; i++){
			if (arr[i] == 'A'){
				if(sum > 10){
					sum = sum + 1;
				}else{
					sum = sum + 11;
				}
			}
		}
    	return sum;
    }

    getCardsPlayer(){
        while(this.getSumCard(this.playerCardsArr) <= 21){
            this.playerCardsArr.push(this.randomCards())
            for(let i = this.playerCardsArr.length - 1;;){
                let div = document.createElement("div")
                div.classList.add("player-cards-position");
                div.innerHTML = this.playerCardsArr[i];
                this.playerCards.prepend(div);
                return;
            }
        }
        
    }

    getCardsDiller(){
        this.dillerCardsArr.push(this.randomCards())
        for(let i = this.dillerCardsArr.length - 1;;){
            let div = document.createElement("div")
            div.classList.add("diller-cards-position");
            div.innerHTML = this.dillerCardsArr[i];
            this.dillerCards.prepend(div);
            return
        }

    }

}
