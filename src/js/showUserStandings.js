const users = userNames.map(data => new User(data));

function renderList() {
    const list = document.getElementById("standings");
    list.innerHTML = "";
    const sortedItems = users.slice().sort((a, b) => b.score - a.score);

    sortedItems.forEach(item => {
        const li = document.createElement("li");
        const score = document.createElement("span");
        const addScore = document.createElement("button");

        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        score.classList.add("badge", "text-bg-primary", "rounded-pill");
        addScore.classList.add("btn", "btn-primary", "rounded-pill");
        
        li.textContent = item.name;
        score.textContent = item.score;
        addScore.textContent = "+";
        addScore.addEventListener("click", () => {
            item.addScore();
            renderList();
        });

        list.appendChild(li);
        li.appendChild(score);
        li.appendChild(addScore);
    });
}
renderList();
