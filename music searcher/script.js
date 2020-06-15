let music = document.getElementById("music-list");
let searchBtn = document.getElementById("my-btn");
let addBtn = document.getElementById("my-btn1");
let musicSearch = document.getElementById("my-form");
let input = document.getElementById("my-form1");
let musicList = document.getElementById("music-list");
let musicArray = [];
let display = document.getElementById("box");

addBtn.addEventListener("click", addMusic);

function addMusic(e) {
    e.preventDefault();
    if (input.value == "") {
        alert("please enter a value");
    } else {
        let item = document.createElement("li");
        let itemList = document.createTextNode(input.value);

        item.appendChild(itemList);
        musicList.appendChild(item);
        musicArray.push(input.value.trim());
        input.value = "";

    }
}

searchBtn.addEventListener("click", searchMusic);

function searchMusic(e) {
    e.preventDefault();
    if (musicSearch.value == "") {
        alert("Please enter a value");
    } else {
        if(musicArray.includes(musicSearch.value)){
            var music = musicArray.find((musicValue)=>{
                return musicValue == musicSearch.value;
            });
            alert ("We found your music : " + music);
        } else {
            alert('Not found');
        }
        musicSearch.value = "";
    }
}

display.addEventListener("mouseover", changeColor);

display.addEventListener("mouseout", changeSecondColor);

// display.addEventListener("mousemove", changeThirdColor);

function changeColor(e){
    display.style.background = "green";
}

function changeSecondColor(e){
    display.style.background = "red";
}

// function changeThirdColor(e){
//     display.style.background = "blue";
// }

