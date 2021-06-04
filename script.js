let ul = document.querySelector(".friendsandfamily");

fetch("lists.json")
  .then((response) => response.json())
  .then((data) => {
    document
      .querySelector("input#Friend")
      .addEventListener("click", function () {
        ul.innerHTML = "";
        data
          .filter((data) => data.forkortelse === "Friend")
          .forEach((element) => {
            let li = document.createElement("li");
            li.innerHTML = `
            <p class='name'>${element.name} ${element.age}</p>
            <p class='studyprogram'> ${element.city} ${element.relation} </p>
            `;
            ul.appendChild(li);
          });
      });
    document
      .querySelector("input#Family member")
      .addEventListener("click", function () {
        ul.innerHTML = "";
        data
          .filter((data) => data.forkortelse === "Familymember")
          .forEach((element) => {
            let li = document.createElement("li");
            li.innerHTML = `
            <p class='name'>${element.fornavn} ${element.etternavn}</p>
            <p class='studyprogram'> ${element.studieprogram} </p>
            `;
            ul.appendChild(li);
          });
      });

    document.querySelector("input#all").addEventListener("click", function () {
      ul.innerHTML = "";
      data.forEach((element) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <p class='name'>${element.fornavn} ${element.etternavn}</p>
            <p class='studyprogram'> ${element.studieprogram} </p>
            `;
        ul.appendChild(li);
      });
    });
  });

function submitAnswers() {
  var total = 3;
  var score = 0;

  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;

  for (var i = 1; i <= total; i++) {
    if (eval("q" + i) === null || eval("q" + i) == "") {
      alert("You missed question " + i);
      return false;
    }
  }

  var answers = ["b", "d", "b"];

  for (var i = 1; i <= total; i++) {
    if (eval("q" + i) == answers[i - 1]) {
      score++;
    }
  }

  var results = document.getElementById("results");
  results.innerHTML =
    "<h3>You scored <span>" +
    score +
    "</span> out of <span>" +
    total +
    "</span></h3>";

  return false;
}
