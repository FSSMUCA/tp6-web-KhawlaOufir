const form = document.getElementById("calc-form");
const errorMsg = document.getElementById("error-msg");
const result = document.getElementById("result");
const historyList = document.getElementById("history-list");

let history = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    errorMsg.textContent = "";
    result.textContent = "";

    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;
    let op = document.getElementById("operation").value;

    if (a === "" || b === "" || op === "") {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        errorMsg.textContent = "Division par zéro interdite.";
        return;
    }

    let res = eval(a + op + b);

    result.textContent = `Résultat : ${res}`;

    history.push(`${a} ${op} ${b} = ${res}`);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
