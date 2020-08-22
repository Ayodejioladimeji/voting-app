
// DEFINING THE DATE AND TIME

const dateElement = document.getElementById("date");

const options = {
    weekday: "long",
    month: "short",
    day: "numeric"
};

const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// The section that shows the time in 12 hours
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("time").innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();




// set initial __count__
let count = 100;
let input = 0;

// select the values and buttons
const progressBar = document.querySelector('#strength');
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const words = document.querySelectorAll(".input");



let totalValue = 0;

localStorage.clear();

words.forEach((word, i) => {
    word.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            if (word.value > count) {

                if (Number(localStorage.getItem(i.toString())) > word.value) {
                    count += (localStorage.getItem(i.toString()) - word.value)
                } 
                else {
                    word.value = count + Number(localStorage.getItem(i.toString()));
                    count = 0;
                }
            }
            else {
                let formerValue = localStorage.getItem(i.toString()) || 0
                let diff = formerValue - word.value;
                if (diff >= 0) {
                    count += diff
                }
                else {
                    count -= (-1 * diff)
                }
                word.value = word.value

            }
            localStorage.setItem(i.toString(), word.value)
        }


        value.textContent = count;
        progressBar.style.width = count + '%';
    })
})



btns.forEach(function (btn, i) {
    btn.addEventListener('click', function (e) {

        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            let number = Math.floor(i / 2);
            if (count < 100) {

                if (words[number].value > 0) {
                    words[number].value = Number(words[number].value) - 1;
                    count++;
                    localStorage.setItem(number.toString(), words[number].value)
                }

            }

        }
        else if (styles.contains('increase')) {
            let number = Math.floor(i / 2);
            if (count > 0) {
                words[number].value = Number(words[number].value) + 1;
                count--;
                localStorage.setItem(number.toString(), words[number].value);
            }

        }

        value.textContent = count;
        progressBar.style.width = count + '%';

    })


})