let icon = document.querySelectorAll(".social")
let url = document.querySelector("input")
let bt = document.getElementById("short")
let container = document.querySelector(".stats")
let block = document.querySelector(".shorterLinksHistory")
let dv;
let inputField = document.querySelector(".message")
let px = 200;
let exurl = document.createElement("h2")
let newurl = document.createElement("h3")
let butCopy = document.createElement("button")
let ErrorMess = document.createElement("p")
let NavBar = document.getElementById("icon")
let RespNav = document.querySelector(".respnav")

let copiedUrl = document.querySelector(".result")
ErrorMess.textContent = "* There is a problem with this link"

butCopy.textContent = "copy"

for (let i = 0; i < icon.length; i++) {
    //console.log(icon[i].firstChild)
    icon[i].firstChild.addEventListener("mouseenter", function() {
        this.setAttribute("fill", "hsl(180, 66%, 49%)")
    })


    icon[i].firstChild.addEventListener("mouseleave", function() {
        this.setAttribute("fill", "white")
    })
}

async function get(urltoShort) {
    let rep = await fetch(`https://api.shrtco.de/v2/shorten?url=${urltoShort}/very/long/link.html`)
    let repjs = await rep.json()
    if (repjs["ok"] == false) {
        inputField.classList.add("di")
        inputField.classList.remove("do")
    } else {
        result = repjs["result"]["full_short_link3"]

        dv = document.createElement("div")
        dv.classList.add("url")

        dv.innerHTML = `
              <h2>${urltoShort}</h2>
              
              <input class=result value=${result} readOnly>
              <button  class=copyBtn>Copy</button>
            `
        block.appendChild(dv)
            //<h3 >${result}</h3>

        for (let counter = 0; counter < document.querySelectorAll(".copyBtn").length; counter++) {
            document.querySelectorAll(".copyBtn")[counter].onclick = function() {
                document.querySelectorAll(".result")[counter].focus()
                document.querySelectorAll(".result")[counter].select()
                document.execCommand("copy")
                document.querySelectorAll(".copyBtn")[counter].textContent = "copied"
                document.querySelectorAll(".copyBtn")[counter].style.backgroundColor = "hsl(255, 11%, 22%)"
            }


        }
        if (window.innerWidth > 970) {


            container.style.marginTop = `${px}px`
            px += 70;
        } else {
            container.style.marginTop = `${px}px`
            px += 100;
        }
    }
}








bt.onclick = function() {
    if (inputField.children.length > 0) {
        inputField.classList.add("do")
    }

    get(url.value)


}
NavBar.onclick = function() {
    if (RespNav.style.display === "none") {
        RespNav.style.display = "block"

    } else {
        RespNav.style.display = "none"

    }

}
let timout = setInterval(function() {
    if (window.innerWidth > 970) {
        RespNav.style.display = "none"


    }

}, 100)