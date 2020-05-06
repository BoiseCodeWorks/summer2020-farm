// a collection of animal names and their coresponding sounds

let animals = [{
    name: "Cow",
    sound: "Moo",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Sheep",
    sound: "Baa",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Honey Badger",
    sound: "Don\'t care",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Duck",
    sound: "AFLAK",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Lion",
    sound: "Roar",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Wade",
    sound: "CheeseBurger",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}, {
    name: "Goose",
    sound: "I will murder your whole family",
    img: "//placehold.it/200x200",
    clip: "",
    eaten: 0
}]


// let cow = {
//     name: "Cow",
//     sound: "Moo"
// }

// function moo() {
//     document.getElementById("sound-text").innerText = "The cow says moo";
// }

function speak(name) {
    let animal = animals.find(a => a.name == name)
    document.getElementById("sound-text").innerHTML = `
    <img src="${animal.img}" /> 
    <h3>The ${name} says ${animal.sound}<h3>
    <p>It has eaten <span id="eaten-${name}">${animal.eaten}</span> times </p>
    `;
}

function feed(name) {
    let animal = animals.find(a => a.name == name)
    animal.eaten++
    let elem = document.getElementById(`eaten-${name}`)
    // NOTE saftey check that the element exists before trying to manipulate it
    if (elem) {
        elem.innerText = animal.eaten.toString();
    }
}


// NOTE we will use the "draw" methods for updating the screen
function drawButtons() {
    let speakTemplate = ''
    let feedTemplate = ''
    // itterate over the animals
    for (let i = 0; i < animals.length; i++) {
        const animal = animals[i];
        // for each of the animals create a button
        // NOTE if you dont add the '' around the strings injected as parameters they will be treated as variables and have unexpected results
        speakTemplate += `<button class="btn btn-primary" onclick="speak('${animal.name}')">${animal.name}</button>`
        feedTemplate += `<button class="btn btn-info" onclick="feed('${animal.name}')">${animal.name}</button>`
    }
    //add the buttons to the page
    document.getElementById("animal-buttons").innerHTML = speakTemplate;
    document.getElementById("animal-feed-buttons").innerHTML = feedTemplate;
}

drawButtons();




























// region ---- ARRAY METHODS ----

// MAP 
// Return a new array of numbers where all the numbers have been doubled
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let doubleArr = [];
for (let i = 0; i < numArr.length; i++) {
    const num = numArr[i];
    doubleArr.push(num * 2)
}
let mapDoubleArr = numArr.map(function (num) {
    return num * 2
})
let mapDoubleArr2 = numArr.map(num => num * 2)

// SPLICE
// return from index 3 to the index 5 of the array as a new array
let names = ["joe", "jim", "bob", "timmy", "tommy", "ned"]

let names2 = [];
for (let i = 3; i < names.length || i < 5; i++) {
    const name = names[i];
    names2.push(name)
}

let names3 = names.splice(3, 5)

// FILTER
// Given an array of jobs return all jobs that pay more than 8
let jobs = [{ title: "bus boy", pay: 7 }, { title: "waiter", pay: 8 }, { title: "cook", pay: 9 }, { title: "host", pay: 7.50 }, { title: "manager", pay: 17 }]

let betterPay = []
for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    if (job.pay > 8) {
        betterPay.push(job)
    }
}

let betterPay2 = jobs.filter(job => job.pay > 8)


// FIND
// return the job "waiter"
let jobs2 = [{ title: "bus boy", pay: 7 }, { title: "waiter", pay: 8 }, { title: "cook", pay: 9 }, { title: "host", pay: 7.50 }, { title: "manager", pay: 17 }]

let found = {};
for (let i = 0; i < jobs2.length; i++) {
    const job = jobs2[i];
    if (job.title == "waiter") {
        found = job;
        break;
    }
}

let found2 = jobs2.find(job => job.title == "waiter");

// endregion