let p = document.getElementById("p")
let op = document.getElementsByClassName("op")
let submit = document.getElementById("submit")
let hide = document.getElementById("hide")
let description = document.getElementById("description")
let next = document.getElementById("next")
let option = document.getElementsByClassName("option")
let body = document.getElementsByTagName("body")
let quiz = document.getElementById("quiz")
let show = document.getElementById("show")
let showScore = document.getElementById("showScore")
let bg1 = document.getElementById("bg1")
let hacker = document.getElementById("hacker")
let label=document.getElementsByClassName("label")
let i = 0, score = 0, t = 0

const question = [
    "What is the standard distance between the target and archer in Olympics?",
    "Which is the highest number on a standard roulette wheel?",
    "How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
    "Which is the seventh planet from the sun?",
    "Which is the largest ocean on Earth?"
]

const opt = [[
    "50",
    "24",
    "400",
    "Uranus",
    "Pacefic"
], [
    "40",
    "20",
    "200",
    "Earth",
    "Indian"
], [
    "20",
    "22",
    "300",
    "Mars",
    "Atlantic"
], [
    "60",
    "23",
    "250",
    "Pluto",
    "Polar"
]]

let ans = [
    "40",
    "22",
    "400",
    "Pluto",
    "Atlantic"
]

const detail = [
    "JS & CSS card multiple choice questions quiz layout is created by Techadmin using HTML, CSS, Javascript . This Bootstrap snippet is free and open source hence you can use it in your project. Pure JS & CSS card multiple choice questions quiz layout download free MCQs template.. The free bootstrap snippets that are showcased here are open source, creative commons or totally free. These free CSS HTML snippets can be freely downloaded. Pure JS & CSS card multiple choice questions ",
    " layout example is best for Bootstrap card, Bootstrap MCQs, Bootstrap quiz, Bootstrap layouts, Bootstrap responsive. It is very easy to add snippets to your proje",
    "nippets - Pure JS & CSS card multiple choice questions quiz layout is created by Techadmin using HTML, CSS, Javascript . This Bootstrap snippet is free and open source hence you can use it in your project. Pure JS & CSS card multiple choice questions quiz layout download free MCQs template.. The free bootstrap sni",
    " quiz, Bootstrap layouts, Bootstrap responsive. It is very easy to add snippets to your project and easy to modify. You can download 200+ bootstrap snippe",
    "t in your project. Pure JS & CSS card multiple choice questions quiz layout download free MCQs template.. The free bootstrap snippets that are showcased"
]

p.innerText = question[i]
for (let j = 0; j < 4; j++) {
    op[j].innerText = opt[j][0]
}
submit.disabled = true

for (k = 0; k < 4; k++) {
    option[k].onclick = function () {
        submit.disabled = false
    }
}

function onSubmit() {
    hide.style.display = "block"
    submit.disabled = true
    description.innerText = detail[i]
    for (let it = 0; it < 4; it++) {
        if (option[it].checked) {
            if (ans[i] == opt[it][i]) {
                score++
                label[it].style.backgroundColor="rgb(116, 252, 116)"
            } else {
                description.style.color = "white"
                document.all[7].style.animationName = "fade"
                bg1.style.display="none"
                hacker.style.display="none"
                label[it].style.backgroundColor="rgb(252, 116, 116)"
            }
        }
        option[it].disabled = true
    }
}

submit.addEventListener("click", onSubmit);

function onNext() {
    i++
    document.all[7].style.animationName = ""
    hide.style.display = "none"
    if (i != 5) {
        p.innerText = question[i]
        for (let j = 0; j < 4; j++) {
            option[j].checked = false
            option[j].disabled = false
            op[j].innerText = opt[j][i]
            bg1.style.display="block"
            hacker.style.display="block"
            label[j].style.backgroundColor="white"
        }
    } else {
        quiz.style.display = "none"
        show.style.display = "block"
        bg1.style.display="none"
        hacker.style.display="none"
        showScore.innerText = `Your Score is ${score} out of 5 in ${t} seconds`
    }
    if (i == 4) next.innerText = "Finish"
}

next.addEventListener("click", onNext);

setInterval(() => {
    t++
}, 1000);