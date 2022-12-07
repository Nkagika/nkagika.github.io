$(document).ready(function () {
  $.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=6857c97d07acff10e2ffbde94972555e&primary_release_year=2022",
    function (data) {
      let dataa = data.results;
      for (var i = 0; i < dataa.length; i++) {
        $("#latest").append(
          `<div>
                <img src='${
                  dataa[i].poster_path !== null
                    ? "https://image.tmdb.org/t/p/w200" + dataa[i].poster_path
                    : "./img.png"
                }' alt='image' />
                <p>${dataa[i].title}</p>
                <p>${dataa[i].release_date}</p>
            </div>`
        );
      }
    }
  );
  $.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=6857c97d07acff10e2ffbde94972555e&certification_country=US&certification=R&sort_by=vote_average.desc",
    function (data) {
      let dataa = data.results;
      for (var i = 0; i < dataa.length; i++) {
        $("#toprated").append(
          `<div>
                <img src='${
                  dataa[i].poster_path !== null
                    ? "https://image.tmdb.org/t/p/w200" + dataa[i].poster_path
                    : "./img.png"
                }' alt='image' />
                <p>${dataa[i].title}</p>
                <p>${dataa[i].release_date}</p>
            </div>`
        );
      }
    }
  );
  $.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=6857c97d07acff10e2ffbde94972555e&?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10",
    function (data) {
      let dataa = data.results;
      for (var i = 0; i < dataa.length; i++) {
        $("#drama").append(
          `<div>
                <img src='${
                  dataa[i].poster_path !== null
                    ? "https://image.tmdb.org/t/p/w200" + dataa[i].poster_path
                    : "./img.png"
                }' alt='image' />
                <p>${dataa[i].title}</p>
                <p>${dataa[i].release_date}</p>
            </div>`
        );
      }
    }
  );

  $("#button").click(function () {
    var value = $("#inputField").val();
    if (value !== "") {
      $.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6857c97d07acff10e2ffbde94972555e&query=${value}`,
        function (data) {
          let dataa = data.results;
          $("#display").html("");
          $("#results").removeClass("none");
          $("#container1").css("display", "none");
          for (var i = 0; i < dataa.length; i++) {
            $("#display").append(
              `<section id="${dataa[i].id}">
                    <img src='${
                      dataa[i].poster_path !== null
                        ? "https://image.tmdb.org/t/p/w200" +
                          dataa[i].poster_path
                        : "./img.png"
                    }' alt='image' />
                    <p>${dataa[i].title}</p>
                    <p>${dataa[i].release_date}</p>
                </section>`
            );
          }
        }
      );
    }
  });

  $("section").click(function (e) {
    if (e.target.tagName === "IMG" || e.target.tagName === "P") {
      $.get(
        `https://api.themoviedb.org/3/movie/${e.target.parentElement.id}?api_key=6857c97d07acff10e2ffbde94972555e`,
        function (data) {
          $("#para").html("");
          $("#details").removeClass("none");
          $("#para").append(
            `<section>
                    <h2>${data.title}</h2>
                  <img src='${
                    data.poster_path !== null
                      ? "https://image.tmdb.org/t/p/w200" + data.poster_path
                      : "./img.png"
                  }' alt='image' />
                  <p>Overview: ${data.overview}</p>
                  <p>Tagline: ${data.tagline}</p>
                  <p>Status: ${data.status}</p>
                  <p>Release Date: ${data.release_date}</p>
                  <p>Revenue: ${data.revenue}</p>
              </section>`
          );
        }
      );
    } else if (e.target.id !== "display") {
      $.get(
        `https://api.themoviedb.org/3/movie/${e.target.parentElement.id}?api_key=6857c97d07acff10e2ffbde94972555e`,
        function (data) {
          $("#para").html("");
          $("#details").removeClass("none");
          $("#para").append(
            `<section>
                    <h2>${data.title}</h2>
                  <img src='${
                    data.poster_path !== null
                      ? "https://image.tmdb.org/t/p/w200" + data.poster_path
                      : "./img.png"
                  }' alt='image' />
                  <p>Overview: ${data.overview}</p>
                  <p>Tagline: ${data.tagline}</p>
                  <p>Status: ${data.status}</p>
                  <p>Release Date: ${data.release_date}</p>
                  <p>Revenue: ${data.revenue}</p>
              </section>`
          );
        }
      );
    }
  });
});
