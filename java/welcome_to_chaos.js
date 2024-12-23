

let playBtn = document.getElementById("playBtn1");
let pauseBtn = document.getElementById("pauseBtn1");
const select = document.getElementById('welcome_dorohedoro')

playBtn.addEventListener('click', () => {
  const file = select
  select.play()
})

pauseBtn.addEventListener('click', ()=> {
select.pause()
  });

let playBtn2=document.getElementById("playBtn2")
let pauseBtn2=document.getElementById("pauseBtn2")
const select2 = document.getElementById("who_am_i?")

playBtn2.addEventListener('click', ()=>{
  select2.play()})

pauseBtn2.addEventListener('click', ()=>{
  select2.pause()})

let playBtn3 = document.getElementById("playBtn3")
let pauseBtn3 = document.getElementById("pauseBtn3")
const dddd = document.getElementById("D.D.D.D")

playBtn3.addEventListener('click', () => {
  dddd.play()})
pauseBtn3.addEventListener('click', () =>{
  dddd.pause()})

let playBtn4 = document.getElementById("playBtn4")
let pauseBtn4 = document.getElementById("pauseBtn4")
const strange_meat_pie = document.getElementById("strange_meat_pie")

playBtn4.addEventListener('click', ()=> {
  strange_meat_pie.play()
})

pauseBtn4.addEventListener('click', () =>{
  strange_meat_pie.pause()
})
