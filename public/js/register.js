const axios = require("axios");
const formAlertDOM = document.querySelector(".alertBlock");

const name = document.querySelector("#name").value;
const linkedIn = document.querySelector("#linkedIn").value;
const git = document.querySelector("#git").value;
const email = document.querySelector("#email").value;
const college = document.querySelector("#college").value;
const techSkills = document.querySelector("#techskills").value;
const note = document.querySelector("#note").value;
const loginButton = document.querySelector("#submit");
const formData = document.querySelector(".reg");
console.log(formData);

const taskCompleted = taskCompletedDOM.checked

function handleClick(e) {
    e.preventDefault();
    console.log("hlo");

        console.log(e);
        const formData = { name, linkedIn, git, email, college, techSkills, note, hackmol, SIH, sheHack };
        console.log(formData);
        fetch("/submit", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Your registered successfully");
            }).catch((err) => {
                console.log(err);
                taskNameDOM.value = tempName
                formAlertDOM.style.display = 'block'
                formAlertDOM.innerHTML = `error, please try again`
            })
    };
