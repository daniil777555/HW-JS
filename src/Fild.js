"use strict";

class Fild {
    constructor (){
        this.fild = document.querySelector(".gaming-fild");
        this.symbolPlayer = "X";
        this.strokeNumber = 0;
    }


    generateFild(){
        for(let i = 0; i < 9; i++){
            let itemDiv = document.createElement("div");
            itemDiv.classList.add(`fild-item${i}`, "fild-item");
            this.fild.prepend(itemDiv);
        }
    }

    start(){
        this.fild.addEventListener('click', 
        this.outputSymbol.bind(this));
    }

    strokeNumberHandler(){
        this.strokeNumber += 1;
        return;
    }

    firstPlayer(){
        if(this.strokeNumber % 2 == 0){
            this.symbolPlayer = "X";
            return;
        } else {
            this.symbolPlayer = "O";
            return;
        }
    }

    checkWin(){ 
        /* Я понимаю, что это можно сократить, но так и не придумал как это сделать. Так же я хотел сделать эту проверку отдельным файлом с классом, но   связать ее с игровым полем никак не получалось*/


        //Проверка по горизонтале для игрока с Х
        if(document.querySelector('.fild-item0').innerHTML == "X" &&
        document.querySelector('.fild-item1').innerHTML == "X" &&
        document.querySelector('.fild-item2').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500);
        }

        if(document.querySelector('.fild-item3').innerHTML == "X" &&
        document.querySelector('.fild-item4').innerHTML == "X" &&
        document.querySelector('.fild-item5').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        if(document.querySelector('.fild-item6').innerHTML == "X" &&
        document.querySelector('.fild-item7').innerHTML == "X" &&
        document.querySelector('.fild-item8').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 1000)
        }


        //Проверка по горизонтале для игрока с 0
        if(document.querySelector('.fild-item0').innerHTML == "O" &&
        document.querySelector('.fild-item1').innerHTML == "O" &&
        document.querySelector('.fild-item2').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        if(document.querySelector('.fild-item3').innerHTML == "O" &&
        document.querySelector('.fild-item4').innerHTML == "O" &&
        document.querySelector('.fild-item5').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        if(document.querySelector('.fild-item6').innerHTML == "O" &&
        document.querySelector('.fild-item7').innerHTML == "O" &&
        document.querySelector('.fild-item8').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        //Проверка по вертикале для игрока с Х
        if(document.querySelector('.fild-item0').innerHTML == "X" &&
        document.querySelector('.fild-item3').innerHTML == "X" &&
        document.querySelector('.fild-item6').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        if(document.querySelector('.fild-item1').innerHTML == "X" &&
        document.querySelector('.fild-item4').innerHTML == "X" &&
        document.querySelector('.fild-item7').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        if(document.querySelector('.fild-item2').innerHTML == "X" &&
        document.querySelector('.fild-item5').innerHTML == "X" &&
        document.querySelector('.fild-item8').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        //Проверка по вертикале для игрока с 0
        if(document.querySelector('.fild-item0').innerHTML == "O" &&
        document.querySelector('.fild-item3').innerHTML == "O" &&
        document.querySelector('.fild-item6').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        if(document.querySelector('.fild-item1').innerHTML == "O" &&
        document.querySelector('.fild-item4').innerHTML == "O" &&
        document.querySelector('.fild-item7').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        if(document.querySelector('.fild-item2').innerHTML == "O" &&
        document.querySelector('.fild-item5').innerHTML == "O" &&
        document.querySelector('.fild-item8').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        //Проверка по диагонале для игрока с Х
        if(document.querySelector('.fild-item0').innerHTML == "X" &&
        document.querySelector('.fild-item4').innerHTML == "X" &&
        document.querySelector('.fild-item8').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        if(document.querySelector('.fild-item2').innerHTML == "X" &&
        document.querySelector('.fild-item4').innerHTML == "X" &&
        document.querySelector('.fild-item6').innerHTML == "X"){
            setTimeout(alert("Первый игрок победил"), 500)
        }

        //Проверка по диагонале для игрока с O
        if(document.querySelector('.fild-item0').innerHTML == "O" &&
        document.querySelector('.fild-item4').innerHTML == "O" &&
        document.querySelector('.fild-item8').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }

        if(document.querySelector('.fild-item2').innerHTML == "O" &&
        document.querySelector('.fild-item4').innerHTML == "O" &&
        document.querySelector('.fild-item6').innerHTML == "O"){
            setTimeout(alert("Второй игрок победил"), 500)
        }
    }


    outputSymbol(){
        let targetBtn = event.target;
        if(targetBtn.innerHTML == ""){
            this.firstPlayer();
            targetBtn.innerHTML = this.symbolPlayer;
            targetBtn.classList.add(this.symbolPlayer);
            this.strokeNumberHandler();
            this.checkWin();
            return;
        }
    }

}