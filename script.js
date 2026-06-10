const currentUser = localStorage.getItem("currentUser");

if(!currentUser){
    window.location.href = "login.html";
}

document.getElementById("welcome").innerText = "Welcome, " + currentUser + " 👋";

function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
function updateUserScore(newScore){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.name === currentUser);

    if(user){
        if(newScore > user.score){
            user.score = newScore;
        }
    }

    localStorage.setItem("users", JSON.stringify(users));
    loadRanking();
}
alert("Quiz Finished! Score: " + score);
updateUserScore(score);
function loadRanking(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.sort((a,b) => b.score - a.score);

    const ranking = document.getElementById("ranking");
    ranking.innerHTML = "";

    users.forEach(u => {
        const li = document.createElement("li");
        li.innerText = u.name + " - " + u.score;
        ranking.appendChild(li);
    });
}

loadRanking();
