// Static user data for GitHub Pages (replaces database)
const usersData = [
    { Name: 'Ciccio', Score: 0 },
    { Name: 'Paolo-Z', Score: 0 },
    { Name: 'Freddy Caffettino', Score: 0 },
    { Name: 'Tonno RioMario', Score: 0 },
    { Name: 'Lio prod.', Score: 0 },
    { Name: 'Berto 120Zebre', Score: 0 },
    { Name: 'Skicicci', Score: 0 },
    { Name: 'Lil Gianni', Score: 0 },
    { Name: 'Young Morelli', Score: 0 }
];

const INC_SCORE = 5;

// Store references to DOM elements
const userElements = new Map();

function createListItem(item, index) {
    const li = document.createElement("li");
    const standingsText = document.createElement("p");
    const score = document.createElement("span");
    const addScore = document.createElement("button");

    standingsText.classList.add("standings-text");
    score.classList.add("score");
    addScore.classList.add("btn", "btn-primary");
    addScore.textContent = "+";

    standingsText.textContent = item.Name;
    score.textContent = item.Score;

    addScore.addEventListener("click", () => {
        // Update the score in data
        item.Score += INC_SCORE;

        // Update score text directly
        score.textContent = item.Score;

        // Add animation class
        score.classList.add("updated");

        // Remove animation class after animation completes
        setTimeout(() => {
            score.classList.remove("updated");
        }, 500);

        // Reorder the list elements
        reorderList();
    });

    li.appendChild(standingsText);
    li.appendChild(score);
    li.appendChild(addScore);

    // Store the reference
    userElements.set(item.Name, { li, score, item });

    return li;
}

function reorderList() {
    const list = document.getElementById("standings");

    // Sort users by score (descending)
    const sortedUsers = usersData.slice().sort((a, b) => b.Score - a.Score);

    // Reorder DOM elements based on sorted order
    sortedUsers.forEach((user, index) => {
        const element = userElements.get(user.Name);
        if (element && element.li) {
            // Update first place styling
            if (index === 0) {
                element.li.classList.add("standings-first-place");
            } else {
                element.li.classList.remove("standings-first-place");
            }

            // Disable slide-in animation for reordering
            element.li.style.animation = 'none';
        }
    });

    // Now move all elements without triggering animations
    sortedUsers.forEach((user, index) => {
        const element = userElements.get(user.Name);
        if (element && element.li) {
            list.appendChild(element.li);
        }
    });
}

function renderList() {
    const list = document.getElementById("standings");
    list.innerHTML = "";
    userElements.clear();

    // Sort users by score (descending)
    const sortedUsers = usersData.slice().sort((a, b) => b.Score - a.Score);

    // Create list items
    sortedUsers.forEach((item, index) => {
        const li = createListItem(item, index);

        // Add first place styling to top user
        if (index === 0) {
            li.classList.add("standings-first-place");
        }

        list.appendChild(li);
    });
}

renderList();
