const xhr = new XMLHttpRequest();

xhr.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {

    const response = JSON.parse(xhr.responseText);
    const count = response.count;
    const data = response.recipes;

    const result = data.map(recipe => {
      return `
        <div class="col-md-4">
          <div class="recipe">
            <h3>${recipe.title}</h3>
            <img src="${recipe.image_url}" />
          </div>
        </div>
      `;
    }).join(' ');

    document.querySelector(".posts .row").innerHTML = result;
    console.log(result);
  }
};
