const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const jouer = document.querySelector("#jouer")
let random;
let c=0;
let a;
let b=0;
let e=0;
let r=3;
let p = 0;
const T = [];
let index = 0; 
function rejouer(){
function fRed(){
    const redI = setInterval(()=>{
      red.style.backgroundColor = 'red'
      const redI2 = setInterval(()=>{
        red.style.backgroundColor = 'rgb(254, 185, 185)'
        clearInterval(redI2)
      },500)
      clearInterval(redI)
    },100)
  }

  function fGreen (){
      const redI = setInterval(()=>{
        green.style.backgroundColor = 'green'
        const redI2 = setInterval(()=>{
          green.style.backgroundColor = 'rgb(171, 240, 171)'
          clearInterval(redI2)
        },500)
        clearInterval(redI)
      },100)
    }

    function fBlue(){
        const redI = setInterval(()=>{
          blue.style.backgroundColor = 'blue'
          const redI2 = setInterval(()=>{
            blue.style.backgroundColor = 'rgb(165, 165, 248)';
            clearInterval(redI2)
          },500)
          clearInterval(redI)
        },100)
      }

      function fYellow (){
          const redI = setInterval(()=>{
            yellow.style.backgroundColor = 'yellow'
            const redI2 = setInterval(()=>{
              yellow.style.backgroundColor = 'rgb(249, 249, 153)'
              clearInterval(redI2)
            },500)
            clearInterval(redI)
          },100)
        }


red.addEventListener('click',()=>{
  a = T.indexOf(0,c)
  console.log(a)
  console.log(b)
  console.log(c)
  if(a===b){
    fRed()
    b++
    c++
  }
  else{
    alert("mauvais boutton")
  }
})

green.addEventListener('click',()=>{
  a = T.indexOf(1,c)
  console.log(a)
  console.log(b)
  console.log(c)
  if(a===b){
    fGreen()
    b++
    c++
  }
  else{
    alert("mauvais boutton")
  }
})
blue.addEventListener('click',()=>{
  a = T.indexOf(2,c)
  console.log(a)
  console.log(b)
  console.log(c)
  if(a===b){
    fBlue()
    b++
    c++
  }
  else{
    alert("mauvais boutton")
  }
})

yellow.addEventListener('click',()=>{
  a = T.indexOf(3,c)
  console.log(a)
  console.log(b)
  console.log(c)
  if(a===b){
    fYellow()
    b++
    c++
  }
  else{
    alert("mauvais boutton")
  }
})
Finterval()
function Finterval(){
  const interval = setInterval(()=>{
    
  random = Math.floor(Math.random()*4)
  T.push(random)
  if(e===c){
    if(r===10){
      p=10
    }
    r++
    p=-1;
  }
  if(random===0){
  fRed()
  }
  else if(random===1){
    fGreen()
  }
  else if(random===2){
    fBlue()
  }
  else if(random===3){
    fYellow()
  }
  index++
  console.log(T)
  console.log(e)
  e++
  if(e>=r){
  clearInterval(interval)}
  },1000)}}

while(p<1){
  rejouer()
p++
}