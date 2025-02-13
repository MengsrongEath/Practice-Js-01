document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const searchValue = document.getElementById("search").value.toLowerCase();
    const filterType = document.getElementById("filterType").value;
    const images = document.querySelectorAll("#imageContainer img");

    images.forEach((img) => {
      img.classList.add("hidden");
    });

    images.forEach((img) => {
      const imgTitle = img.getAttribute("data-title").toLowerCase();
      const imgId = img.getAttribute("data-id");

      if (
        (filterType === "title" && imgTitle.includes(searchValue)) ||
        (filterType === "id" && imgId === searchValue)
      ) {
        img.classList.remove("hidden");
      }
    });
  });
