
let boardBtn = document.querySelector("#board");
let displayPage = document.querySelector(".displayPage");
let error = document.getElementById("error");
let backBtn = document.querySelector("#back");


boardBtn.addEventListener('click', () => {
    if (count === 0) {
        let ranking = [
            { name: "Dorathy", vote: Number(words[0].value), image: "./images/Ellipse.png" },
            { name: "Brighto", vote: Number(words[1].value), image: "./images/Brighto.jpg" },
            { name: "Laycon", vote: Number(words[2].value), image: "./images/laycon.jpg" },
            { name: "Erica", vote: Number(words[3].value), image: "./images/erica.jpg" },
            { name: "Nengi", vote: Number(words[4].value), image: "./images/Nengi.jpg" },
            { name: "prince", vote: Number(words[5].value), image: "./images/prinebbn.jpg" },

        ];


        let sortedRank = ranking.sort((a, b) => b.vote - a.vote);

        console.log(sortedRank);
        console.log(displayPage)





        //   <!-- THE SECTION OF THE LEADERBOARD -->

        displayPage.innerHTML =
            `
        <div class="leaderboar">
            <div class="board-one">
                <h3>Leaderboard</h3>
            </div>

            <div class="board-two">
                <div class="board-left">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[0].image}">
                        </div>
                        <p>${sortedRank[0].name}</p>
                        <div class="position">
                            <span id="erica">${sortedRank[0].vote}</span>
                        </div>
                    </div>
                </div>
                <div class="board-right">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[1].image}">
                        </div>
                        <p>${sortedRank[1].name}</p>
                        <div class="position">
                            <span id="lilo">${sortedRank[1].vote}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="board-three">
                <div class="board-left">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[2].image}">
                        </div>
                        <p>${sortedRank[2].name}</p>
                        <div class="position">
                            <span id="ozo">${sortedRank[2].vote}</span>
                        </div>
                    </div>
                </div>
                <div class="board-right">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[3].image}">
                        </div>
                        <p>${sortedRank[3].name}</p>
                        <div class="position">
                            <span id="trickytee">${sortedRank[3].vote}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="board-four">
                <div class="board-left">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[4].image}">
                        </div>
                        <p>${sortedRank[4].name}</p>
                        <div class="position">
                            <span id="prince">${sortedRank[4].vote}</span>
                        </div>
                    </div>
                </div>
                <div class="board-right">
                    <div class="box">
                        <div class="image">
                            <img src="${sortedRank[5].image}">
                        </div>
                        <p>${sortedRank[5].name}</p>
                        <div class="position">
                            <span id="vee">${sortedRank[5].vote}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="evicted">
                <p>${sortedRank[sortedRank.length - 1].name} was Evicted</p>
            </div>
            <div class="board-five">
                <button id="back" onclick="back()">Back to Vote</button>
            </div>

        </div>
  
  `
    }
    else {
        error.innerHTML = "**Don't be stubborn, Abeg go complete your vote";
    }

});



