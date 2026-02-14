const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (lessons) => {
// 1. get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = " ";
//2. get into every lessons
  lessons.forEach((lesson) => {
//3.  create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `


    `;
// 4. append into container
  });
};

loadData();
