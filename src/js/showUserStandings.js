const list = document.getElementById("standings");

for (let i = 0; i < 8; i++) {
    const li = document.createElement("li");
    const score = document.createElement("span");

    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    score.classList.add("badge", "text-bg-primary", "rounded-pill");
    
    li.textContent = user[i].name;
    score.textContent = user[i].score;

    list.appendChild(li);
    li.appendChild(score);
}