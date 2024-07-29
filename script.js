let btnRef=document.querySelectorAll(".btn-move")
let popupRef=document.querySelector(".popup")
let newGameBtn=document.querySelector("#btn-new-game")
let restartBtn=document.querySelector("#btn-restart");
let msgRef=document.querySelector("#message");
let turnX=document.querySelector("#x-turn");
let turnO=document.querySelector("#o-turn");
turnX.classList.add("glow");
let winningPattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]];
let xTurn=true;
let count=0;
const winFunction = (character)=>{
    setTimeout(()=>{
        disableButtons();
        if(character==="X"){
            msgRef.innerHTML="&#x13c6; <br> 'X' Wins ";
        }
        else{
            msgRef.innerHTML="&#x13c6; <br> 'O' Wins ";
        }
    },300);
    
}
const winChecker =()=>{
    for(let arr of winningPattern ){
        let [ele1,ele2,ele3]=[
            btnRef[arr[0]].innerText,
            btnRef[arr[1]].innerText,
            btnRef[arr[2]].innerText
        ];
        if(ele1!=="" && ele2!=="" && ele3!==""){
            if(ele1===ele2 && ele2===ele3){
                winFunction(ele1);
                break;
            }
        }
    }
}

const  disableButtons = () =>{
  btnRef.forEach((btn)=>{
    btn.disabled=true;

  });
  popupRef.classList.remove("hide");
}

btnRef.forEach((element) => {
    element.addEventListener("click",()=>{
       if(xTurn===true){
        element.innerText="X";
        xTurn=false;
        turnO.classList.add("glow");
        turnX.classList.remove("glow");
       }
       else{
        element.innerText="O";
        xTurn=true;
        turnO.classList.remove("glow");
        turnX.classList.add("glow");

       }
       element.disabled=true;
       count++;
       if(count===9){
        drawFunction();
        return;
       }
       winChecker();
    });
});

const drawFunction = () =>{
    disableButtons();
    msgRef.innerHTML="&#x1F38A; <br> It's a draw"
}

newGameBtn.addEventListener("click",()=>{
    count=0;
    turnX.classList.add("glow");
    turnO.classList.remove("glow");
    enableButtons();
})

const  enableButtons = () =>{
    btnRef.forEach((btn)=>{
      btn.disabled=false;
      btn.innerText="";
  
    });
    popupRef.classList.add("hide");
  };
  restartBtn.addEventListener("click",()=>{
    count=0;
    xTurn=true;
    turnX.classList.add("glow");
    turnO.classList.remove("glow");
    enableButtons();
  })