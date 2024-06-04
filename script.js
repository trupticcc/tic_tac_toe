//constants 
let turn_sound = new Audio("ting.mp3");
let gameover = new Audio("game_over.mp3");
let turn = "X";

let winner ;
let found = false ;

// function to change turn 
const changeTurn = () => 
    {
        return  turn === "X" ? "O" : "X" ;  
    }

    // function to check for win 
const checkWin = () => 
    {
        box = document.getElementsByClassName("box");
        // console.log(box); 
          let win = [[0,1,2] ,
                     [3,4,5] ,
                     [6,7,8] ,
                     [0,3,6] ,
                     [1,4,7] ,
                     [2,5,8] ,
                     [0,4,8] ,
                     [2,4,6] ];
                    
                     ele = document.getElementsByClassName("info");
             for(let pattern of win)
                {
                    // console.log(box[pattern[0]] , box[pattern[1]] ,box[pattern[2]] )
                    if((box[pattern[0]].innerHTML ===  box[pattern[1]].innerHTML) && (box[pattern[1]].innerHTML ===  box[pattern[2]].innerHTML)  && (box[pattern[0]].innerHTML !== "")  && (box[pattern[1]].innerHTML != "") && (box[pattern[2]].innerHTML != "") )
                        {
                    
                        found = true ; 
                        winner = "Winner is " + box[pattern[0]].innerHTML ; 
                        }
                }   
    }



 // game logic 
 let boxes1 = document.getElementsByClassName("box");
 let boxes = Array.from(boxes1);

 boxes.forEach((element) => {
   element.addEventListener("click" , function() {
        if(element.innerHTML === "")
            { 
                element.innerHTML = turn ;
                turn = changeTurn();
                turn_sound.play();
                checkWin(); 
                if(found == false )
                    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                ele = document.getElementsByClassName("info");
                ele[0].innerHTML = "Turn for " + turn ;
                    }else
                    { 
                        
                        ele[0].innerHTML =  winner ;
                        gameover.play();
                        let w = document.getElementsByClassName("info");
                        w[0].style.color = "green";
    
                        boxes.forEach((element) => { 
                            if(element.innerHTML == "" )
                                {
                                    element.innerHTML = " " ;
                                }
                         }) 

                         winimg1 = document.getElementsByClassName("winimg");
                         winimg1[0].style.width = "200px" ;
                    }  
            }
   })
 })




       // function to reset game 
 reset = document.getElementById("reset");
 reset.addEventListener("click" , function(){
        boxes.forEach((element) => {
            element.innerText = "" ;
        })

        ele = document.getElementsByClassName("info");
        turn = "X";
        ele[0].innerHTML = "Turn for " + turn  ;
        ele[0].style.color = "rgb(199, 48, 174)" ;
        found = false ; 

        winimg1 = document.getElementsByClassName("winimg");
        winimg1[0].style.width = "0px" ;
        
        
 })
 
 

