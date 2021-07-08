var startBtn=document.querySelector(".startBtn")
var intro=document.querySelector(".intro")
var quiz=document.querySelector(".quiz")

var timer=document.querySelector(".timer")

 
var questions=[
    {
    title:"question 1",
    answers:["answer 1","answer 2", "answer 3", "answer 4"],
    solution:"answer 1"
},
{
    title:"question 2",
    answers:["answer 1","answer 2", "answer 3", "answer 4"],
    solution:"answer 1"
},

{
    title:"question 3",
    answers:["answer 1","answer 2", "answer 3", "answer 4"],
    solution:"answer 1"
},
{
    title:"question 4",
    answers:["answer 1","answer 2", "answer 3", "answer 4"],
    solution:"answer 1"
},
{
    title:"question 5",
    answers:["answer 1","answer 2", "answer 3", "answer 4"],
    solution:"answer 1"
}


]

var time=questions.length*15

var timerid=""

var timer=document.querySelector(".timer")

startBtn.addEventListener("click",function(){
    
    intro.classList.add("hide")
    quiz.classList.remove("hide")
    timerid=setInterval(() => {
        timer.textContent=time
        time--
    },1000);
})


