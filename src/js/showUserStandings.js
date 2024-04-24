const INC_SCORE = 5;
// const users = userNames.map(data => new User(data));

function renderList() {
    let firstPlace = true;
    axios.get('./api/getUsers.php').then(response => {
        const users = response.data;     
        const list = document.getElementById("standings");
        list.innerHTML = "";
        // const sortedItems = users.slice().sort((a, b) => b.score - a.score);
        
        users.forEach(item => {
            const li = document.createElement("li");
            const standingsText = document.createElement("p");
            const score = document.createElement("span");
            const addScore = document.createElement("button");
            
            standingsText.classList.remove("standings-first-place");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            standingsText.classList.add("standings-text", "m-0", "me-auto");
            score.classList.add("badge", "text-bg-primary", "rounded-pill", "mx-3", "score");
            addScore.classList.add("btn", "btn-primary", "pb-2");

            if(firstPlace) {
                firstPlace = false;
                li.classList.add("standings-first-place");
            }
            
            standingsText.textContent = item.Name;
            score.textContent = item.Score;
            addScore.textContent = "+";

            const formData = new FormData();
            formData.append('name', item.Name);
            formData.append('score', INC_SCORE);
            addScore.addEventListener("click", () => {
                axios.post('./api/addScore.php', formData).then(() => {
                renderList();
                });
            });

            list.appendChild(li);
            li.appendChild(standingsText);
            li.appendChild(score);
            li.appendChild(addScore);
        });
    });
}
renderList();
