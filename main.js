// auto
const availableKeywords = [
    'Tech xplore',
    'Marvel quiz',
    'Football tournament',
    'Anime Quiz',
    'Quantum Quest',
    'Battleground mobile india',
    'Treasure Hunt',
    'Push-Pull',
    'Chess Tournament',
    'Crossword Jeopardy',
    'Mini Militia Tournament',
    'BLITZ CURL Football Tournament',
    'BGMI TOURNAMENT ECE',
    'IDEA PITCHING',
    'PERIOD CRAMPS SIMULATOR',
    'MINUTE TO WIN IT',
    'CARROMS TOURNAMENT',
    'SUMO WRESTLING',
    'Paperplane Contest',
    'DEBUG DASH',
    "INCEPTO",
    "Blind Typing",
    "CODEBLITZ",
    "Bridge-O-Mania",
    "ROBO DASH - ASCI '24 Maze Solving Challenge",
    "CLASH OF MINDS: A Debate competition",
    "KEL EXPO at ADVYKA'24 - VIDYUTH 6.0",
    "KSEB EXPO at ADVYKA'24 - VIDYUTH 6.0",
    "Solar System using PV System WORKSHOP",
    "Circuit craze Cross Wire Competition",
    "Autophotography Contest",
    "CRIME INVESTIGATION Competition “INVESITGATEX”",
    "Paintball Showdown by Vidyuth 6.0",
    "SCRIPT INVERSO - Coding Competition by ASCI",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.addEventListener('input', function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML = '';
    }
});

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
// main
$(document).ready(function(){
    $('.sidebar-link').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        // Close the sidebar after clicking on a link
        $('.sidebar').removeClass('open');
        $('#nav-icon1').removeClass('open');
    });

    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
        // Call the sideslider function when #nav-icon1 is clicked
        togglesideslider();
    });
});

// Define the sideslider function outside of the click event handler
function togglesideslider() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// timer

var countDownDate = new Date("May 12,2024 19:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60* 24));
    var hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "L";
        document.getElementById("hours").innerHTML = "I";
        document.getElementById("minutes").innerHTML = "V";
        document.getElementById("seconds").innerHTML = "E";
    }
},1000);

// fade in js
const proimg = document.querySelectorAll(".proimg");

document.addEventListener("scroll", function(){
    proimg.forEach((proimg) => {
        if(isInView(proimg)){
            proimg.classList.add("proimg--visible");
        }
    });
});
const timer = document.querySelectorAll(".timer");

document.addEventListener("scroll", function(){
    timer.forEach((timer) => {
        if(isInView(timer)){
            timer.classList.add("timer--visible");
        }
    });
});

const container = document.querySelectorAll(".container");

document.addEventListener("scroll", function(){
    container.forEach((container) => {
        if(isInView(container)){
            container.classList.add("container--visible");
        }
    });
});
const container2 = document.querySelectorAll(".container2");

document.addEventListener("scroll", function(){
    container2.forEach((container2) => {
        if(isInView(container2)){
            container2.classList.add("container2--visible");
        }
    });
});
const container3 = document.querySelectorAll(".container3");

document.addEventListener("scroll", function(){
    container3.forEach((container3) => {
        if(isInView(container3)){
            container3.classList.add("container3--visible");
        }
    });
});
const container4 = document.querySelectorAll(".container4");

document.addEventListener("scroll", function(){
    container4.forEach((container4) => {
        if(isInView(container4)){
            container4.classList.add("container4--visible");
        }
    });
});
const container5 = document.querySelectorAll(".container5");

document.addEventListener("scroll", function(){
    container5.forEach((container5) => {
        if(isInView(container5)){
            container5.classList.add("container5--visible");
        }
    });
});
const reg = document.querySelectorAll(".reg");

document.addEventListener("scroll", function(){
    reg.forEach((reg) => {
        if(isInView(reg)){
            reg.classList.add("reg--visible");
        }
    });
});
const eveimg1 = document.querySelectorAll(".eveimg1");
document.addEventListener("scroll", function(){
    eveimg1.forEach((eveimg1) => {
        if(isInView(eveimg1)){
            eveimg1.classList.add("eveimg1--visible");
        }
    });
});
const eveimg2 = document.querySelectorAll(".eveimg2");
document.addEventListener("scroll", function(){
    eveimg2.forEach((eveimg2) => {
        if(isInView(eveimg2)){
            eveimg2.classList.add("eveimg2--visible");
        }
    });
});
const pslide1 = document.querySelectorAll(".pslide1");
document.addEventListener("scroll", function(){
    pslide1.forEach((pslide1) => {
        if(isInView(pslide1)){
            pslide1.classList.add("pslide1--visible");
        }
    });
});
const pslide2 = document.querySelectorAll(".pslide2");
document.addEventListener("scroll", function(){
    pslide2.forEach((pslide2) => {
        if(isInView(pslide2)){
            pslide2.classList.add("pslide2--visible");
        }
    });
});

const deptlogo = document.querySelectorAll(".deptlogo");
document.addEventListener("scroll", function(){
    deptlogo.forEach((deptlogo) => {
        if(isInView(deptlogo)){
            deptlogo.classList.add("deptlogo--visible");

        }
    });
});
function isInView (element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < 
        (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the registration panels by their class
    var registrationPanels = document.querySelectorAll(".reg");

    // Function to show the registration panel
    function showRegistrationPanel(panel) {
        panel.style.display = "block"; // Show the registration panel
    }

    // Loop through each registration panel and call the showRegistrationPanel function after 4 seconds
    registrationPanels.forEach(function(panel) {
        setTimeout(function() {
            showRegistrationPanel(panel);
        }, 4000); // 4000 milliseconds = 4 seconds
    });
});


// other events

document.getElementById("search-box").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("input-box").value;
    // Redirect to deptevent.html with the search term as query parameter
    window.location.href = `event.html?event=${encodeURIComponent(searchTerm)}`;
});


// event image slider
// JavaScript for the first container
const panelsContainer1 = document.querySelector(".container5");
const panels1 = panelsContainer1.querySelectorAll(".panel");

// Add "active" class to the first panel in the first container by default
panels1[0].classList.add("active");

panels1.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses(panels1);
        panel.classList.add("active");
    });
});

// JavaScript for the second container
const panelsContainer2 = document.querySelector(".container2");
const panels2 = panelsContainer2.querySelectorAll(".panel");

// Add "active" class to the first panel in the second container by default
panels2[0].classList.add("active");

panels2.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses(panels2);
        panel.classList.add("active");
    });
});

// JavaScript for the third container
const panelsContainer3 = document.querySelector(".container3");
const panels3 = panelsContainer3.querySelectorAll(".panel");

// Add "active" class to the first panel in the third container by default
panels3[0].classList.add("active");

panels3.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses(panels3);
        panel.classList.add("active");
    });
});

// JavaScript for the fourth container
const panelsContainer4 = document.querySelector(".container4");
const panels4 = panelsContainer4.querySelectorAll(".panel");

// Add "active" class to the first panel in the fourth container by default
panels4[0].classList.add("active");

panels4.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses(panels4);
        panel.classList.add("active");
    });
});

function removeActiveClasses(panels) {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}


 