$(document).ready(function() {
  var item;
  var showList = document.getElementById("output-list");
 
  var pHolder = '<img src="https://via.placeholder.com/150">';
  var searchInfo;

  $("#search").click(function() {

   
    var bookUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
    
  
    showList.innerHTML = ""; 
    document.body.style.backgroundImage = "url('')";
     searchInfo = $("#search-box").val();
     if(searchInfo === "" || searchInfo === null) {
       funError();
     }
    else {
       
       $.ajax({
          url: bookUrl + searchInfo,
          dataType: "json",
          success: function(response) {
          
            if (response.totalItems === 0) {
              alert("Error collecting Results!.. Retry")
            }
            else {
              $("#title").animate({'margin-top': '5px'}, 1000); 
              
              $(".book-list").css("visibility", "visible");
              showResults(response);

            }
          },
          error: function () {
            alert("Error.. <br>"+" Please retry!");
          }
        });
      }
     document.querySelector("#header").style.display="none";
   });

  
   function showResults(response) {
    var size=$("#resize").val();
       var outsum=Number(size);

    if( outsum<1){
      alert("The total result cannot be less than 1");

    }
else if(outsum<= response.items.length){
      for (var i = 0; i < outsum; i+=2) {

        item = response.items[i];
        title1 = item.volumeInfo.title;
        author1=item.volumeInfo.authors;
       
        Isbn1 = item.volumeInfo.industryIdentifiers[1].identifier
        Img1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : pHolder ;

        item2 = response.items[i+1];
        title2 = item2.volumeInfo.title;
        author2=item2.volumeInfo.authors;
        
        Isbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
        Img2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : pHolder ;

        showList.innerHTML += '<div class="row mt-4">' +
                                outputforCard(Img1, title1, Isbn1,author1) +
                                outputforCard(Img2, title2, Isbn2,author2) +
                                '</div>';

        console.log(showList);
      }
    } else{
      alert(`The available search result is: ${response.items.length} `);
    }
   }

   
   function outputforCard(bookImg, title, bookIsbn, author) {
     var displayUrl = 'viewbook-details.html?isbn='+bookIsbn; 
     var displayCard = `<div class="col-lg-6">
       <div class="card" style="">
         <div class="row no-gutters">
           <div class="col-md-4">
             <img src="${bookImg}" class="card-img" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <a  target="_blank" href="${displayUrl}"><h5 class="card-title">${title}</h5></a>
               <br><br>
               <p style="color:black;"><b>Author(s): </b>${author} pages</p>
               
               
               
             </div>
           </div>
         </div>
       </div>
     </div>`
     return displayCard;
   }

   function funError() {
     alert("search box  cannot be empty!. Write something")
   }

});
