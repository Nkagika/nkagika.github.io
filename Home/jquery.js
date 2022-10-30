$(document).ready(function () {
  let str = "";
  $("#myBtn").click(function (e) {
    e.preventDefault();
    str = $("#myInput").val();
    if (str !== "") {
      $("#myInput").val("");
      $("h2").removeClass("none");
      $("#container").empty();
      $("#result").addClass("none");
      $("#result").empty();
      $.get(
        `https://www.googleapis.com/books/v1/volumes?q=${str}&maxResults=10&startIndex=40&key=AIzaSyAupBSOgkgO0EVT3GuNYonWTpEZL6q4eHg`,
        function (data) {
          if (data.totalItems === 0) {
            alert("No Books available of this category");
          } else {
            $("#buttons").removeClass("none");
            let volume = data.items;
            for (var i = 0; i < volume.length; i++) {
              let book = volume[i].volumeInfo;
              $("#container").append(
                `<div id=${volume[i].id}><img src=${
                  book?.imageLinks?.smallThumbnail || "./img.png"
                } alt="no image found of this book" /><p>${
                  book.title
                }</p></div>`
              );
            }
          }
        }
      );
      $.get(
        `https://www.googleapis.com/books/v1/volumes?q=${str}&maxResults=40&startIndex=0&key=AIzaSyAupBSOgkgO0EVT3GuNYonWTpEZL6q4eHg`,
        function (data) {
          if (data.totalItems !== 0) {
            $("#container2").empty();
            $("#container3").empty();
            $("#container4").empty();
            $("#container5").empty();
            let volume = data.items;
            for (var i = 0; i < volume.length; i++) {
              let book = volume[i].volumeInfo;
              if (i <= 9) {
                $("#container2").append(
                  `<div id=${volume[i].id}><img src=${
                    book?.imageLinks?.smallThumbnail || "./img.png"
                  } alt="no image found of this book" /><p>${
                    book.title
                  }</p></div>`
                );
              } else if (i >= 10 && i <= 19) {
                $("#container3").append(
                  `<div id=${volume[i].id}><img src=${
                    book?.imageLinks?.smallThumbnail || "./img.png"
                  } alt="no image found of this book" /><p>${
                    book.title
                  }</p></div>`
                );
              } else if (i >= 20 && i <= 29) {
                $("#container4").append(
                  `<div id=${volume[i].id}><img src=${
                    book?.imageLinks?.smallThumbnail || "./img.png"
                  } alt="no image found of this book" /><p>${
                    book.title
                  }</p></div>`
                );
              } else {
                $("#container5").append(
                  `<div id=${volume[i].id}><img src=${
                    book?.imageLinks?.smallThumbnail || "./img.png"
                  } alt="no image found of this book" /><p>${
                    book.title
                  }</p></div>`
                );
              }
            }
          }
        }
      );
    } else {
      alert("Please fullfill the input field");
    }
  });

  $("#btn1").click(function () {
    $("#container").removeClass("none");
    $("#container2").addClass("none");
    $("#container3").addClass("none");
    $("#container4").addClass("none");
    $("#container5").addClass("none");
  });
  $("#btn2").click(function () {
    $("#container").addClass("none");
    $("#container2").removeClass("none");
    $("#container3").addClass("none");
    $("#container4").addClass("none");
    $("#container5").addClass("none");
  });
  $("#btn3").click(function () {
    $("#container").addClass("none");
    $("#container2").addClass("none");
    $("#container3").removeClass("none");
    $("#container4").addClass("none");
    $("#container5").addClass("none");
  });
  $("#btn4").click(function () {
    $("#container").addClass("none");
    $("#container2").addClass("none");
    $("#container3").addClass("none");
    $("#container4").removeClass("none");
    $("#container5").addClass("none");
  });
  $("#btn5").click(function () {
    $("#container").addClass("none");
    $("#container2").addClass("none");
    $("#container3").addClass("none");
    $("#container4").addClass("none");
    $("#container5").removeClass("none");
  });

  $("div").click(function (e) {
    $("#result").removeClass("none");
    if (
      e.target.id !== "" &&
      e.target.id !== "container" &&
      e.target.id !== "container2" &&
      e.target.id !== "container3" &&
      e.target.id !== "container4" &&
      e.target.id !== "container5"
    ) {
      $(result).empty();
      $.get(
        `https://www.googleapis.com/books/v1/volumes/${e.target.id}`,
        function (data) {
          let book = data.volumeInfo;
          let author = "";
          if (book.authors !== undefined) {
            let conversion2 = book.authors;
            conversion2 = conversion2.toString();
            author = `<p>Authors: ${conversion2}</p>`;
          }
          let category = "";
          if (book.categories !== undefined) {
            let conversion2 = book.categories;
            conversion2 = conversion2.toString();
            category = `<p>Category: ${conversion2}</p>`;
          }
          let date = "";
          if (book.publishedDate !== undefined) {
            date = `<p>Published Date: ${book.publishedDate}</p>`;
          }
          let description = "";
          if (book.description !== undefined) {
            description = `<p>Description: ${book.description}</p>`;
          }
          $("#result").append(
            `<div>
              <h2>${book.title}</h2>
              <img src=${
                book?.imageLinks?.smallThumbnail || "./img.png"
              } alt="no image found of this book" />
              ${author}
              <p>Publisher: ${book.publisher}</p>
              ${date}
              ${category}
              <p>Pages: ${book.pageCount}</p>
              ${description}
              <a href=${book.previewLink}>Preview Book</a>
            </div>`
          );
        }
      );
    } else if (
      e.target.id !== "container" &&
      e.target.id !== "container2" &&
      e.target.id !== "container3" &&
      e.target.id !== "container4" &&
      e.target.id !== "container5"
    ) {
      $(result).empty();
      $.get(
        `https://www.googleapis.com/books/v1/volumes/${e.target.parentElement.id}`,
        function (data) {
          let book = data.volumeInfo;
          let author = "";
          if (book.authors !== undefined) {
            let conversion2 = book.authors;
            conversion2 = conversion2.toString();
            author = `<p>Authors: ${conversion2}</p>`;
          }
          let category = "";
          if (book.categories !== undefined) {
            let conversion2 = book.categories;
            conversion2 = conversion2.toString();
            category = `<p>Category: ${conversion2}</p>`;
          }
          let date = "";
          if (book.publishedDate !== undefined) {
            date = `<p>Published Date: ${book.publishedDate}</p>`;
          }
          let description = "";
          if (book.description !== undefined) {
            description = `<p>Description: ${book.description}</p>`;
          }
          $("#result").append(
            `<div>
              <h2>${book.title}</h2>
              <img src=${
                book?.imageLinks?.smallThumbnail || "./img.png"
              } alt="no image found of this book" />
              ${author}
              <p>Publisher: ${book.publisher}</p>
              ${date}
              ${category}
              <p>Pages: ${book.pageCount}</p>
              ${description}
              <a href=${book.previewLink}>Preview Book</a>
            </div>`
          );
        }
      );
    }
  });
});
