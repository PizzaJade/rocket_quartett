$(document).ready(function () {
  createCards();
});

function createCards() {
    const iconPath = "img/icons/";

    rocketData.forEach(rocket => {
        let card = document.createElement("div");
        card.className = "card-wrapper";
        const imagePath = "img/" + rocket.group_letter + rocket.number + "_" + rocket.name.replace(/\s/g, '') + ".png";

        card.innerHTML = `
            <div class="card debug">
                <div class="h debug">
                    <div
                        class="h-number flex items-center justify-center">
                            ${rocket.group_letter}${rocket.number}
                    </div>
                    <div
                        class="h-title flex items-center justify-start" data-info="${rocket.group}">
                        <h3>${rocket.name}</h3>
                    </div>
                </div>

                <div class="b debug parent">
                    <img class="absolute" src="${imagePath}" alt="Image of a ${rocket.name}" onerror="this.src='img/a1_FalconHeavy.png'">
                    <div class="b-mission debug absolute">Mission Goal: ${rocket.mission_goal}</div>
                </div>

                <div class="stat debug">
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="${iconPath}year_built.png" alt="year built">
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                                ${rocket.year_built}
                            </div>
                        </div>
                    </div>
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="${iconPath}mission_duration.png" alt="mission duration">
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                            ${rocket.mission_duration}
                            </div>
                        </div>
                    </div>
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="./img/icons/weight.png" alt="weight">
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                                ${rocket.weight}
                            </div>
                        </div>
                    </div>
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="./img/icons/max_earth_distance.png" alt="max_earth_distance">
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                                ${Math.round(rocket.max_earth_distance * 100)}
                            </div>
                        </div>
                    </div>
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="${iconPath}max_speed.png" alt="max speed" />
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                            ${Math.round(rocket.max_speed * 100)}
                            </div>
                        </div>
                    </div>
                    <div class="statinfo flex">
                        <div class="stat-img flex items-center justify-center">
                            <img src="./img/icons/development_cost.png" alt="development_cost">
                        </div>
                        <div class="stat-text flex items-center justify-center">
                            <div class="stat-text-wrapper flex items-center justify-center">
                                ${rocket.development_cost}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `;
        document.getElementById("cards-container").appendChild(card);
    }
    );
}


