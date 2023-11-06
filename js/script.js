document.addEventListener("DOMContentLoaded", function () {
    const jsonContainer = document.getElementById("json-container");
    
    const githubUrl = "https://raw.githubusercontent.com/Margot-Vanfleteren/fruits/main/fruits.json";

    fetch(githubUrl)
        .then((response) => response.json())
        .then((data) => {
            // Process and display the JSON data
            data.forEach((item) => {
                const div = document.createElement("div");
                div.innerHTML = `<h2>${item.name}</h2>
                                 <p>${item.description}</p>
                                 <p>Price: $${item.price}</p>
                                 <img src="${item.image}" alt="${item.name}">`;
                jsonContainer.appendChild(div);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
