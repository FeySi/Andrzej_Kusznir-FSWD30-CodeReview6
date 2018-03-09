
var Cds = [
     {
      title: 'Dylan',
      author: 'Bob Dylan',
      genre: 'rock',
      publisher: '-',
        img: "img/Bob_Dylan_-_Dylan_(1973_album).jpg",  
      rating: '-',
      time: 'Minutes: 34'   
      },

 {
      title: 'Sade',
      author: 'smooth soul',
      genre: 'romantic comedy',
      publisher: 'Epic',
        img: "img/sade-diamond-life.jpg",  
      rating: '5' ,
      time: ' Minutes: 45'
      },

];


var i = 0
         
        
    for (i = 0; i < Cds.length; i++) {

      
 document.getElementById("cc").innerHTML +=('<div class="item col-lg-4" >'

                                         + "<article>"
        
                                          + '<div class="card ' + i +'">'
                                          +"<img src=" + '"'+ Cds[i].img +'"' + "style=50%>"
                                          + "<h1> Title: " + Cds[i].title + "</h1>"
                                          + "<h2> Author: " + Cds[i].author + "</h2>"
                                          + "<p> Gener: " + Cds[i].genre + "</p>"
                                          + "<p> Publisher: " + Cds[i].publisher + "</p>"
                                          + "<p>Time:  " + Cds[i].time + "</p>"
                                          +"<p> Rating: " + Cds[i].rating + "</p>"

                                          +"</div>"
          
                                          +"</article>"
                                          +"</div>" );

        
    };

 
 

 function AddCds() {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    genre = document.getElementById("genre").value;
    publisher = document.getElementById("publisher").value;
    img = document.getElementById("img").value;
    time = document.getElementById("time").value;
    rating = document.getElementById("rating").value;

var terror = document.getElementById("title"),
   aerror = document.getElementById("author"),
   ierror = document.getElementById("img");

    
    
    c = ('<div class="item col-lg-4" >' + '<article>' + '<div class="card">' + '<img src="' + img +'"style=50%>' + '<h1>Title: ' + title + '</h1>' + '<h2> Author: ' + author + '</h2>' + '<p> Gener: ' + genre + '</p>' + '<p> Publisher: ' + publisher + '</p>' + '<p> Time: ' + time + '</p>' + '<p> Rating: ' + rating + '</p>' + '</div>' + '</article>' + '</div>' );


  ccc = Cds.push(c);


if (title == "" || author == "" || img == "") {

  document.getElementById("error").innerHTML= "full the empte bars please !"

  terror.classList.add("errors");
   aerror.classList.add("errors");
   ierror.classList.add("errors");

}else{

document.getElementById("error").innerHTML = "DONE ! ";
    terror.classList.remove("errors");
   aerror.classList.remove("errors");
   ierror.classList.remove("errors");

   document.getElementById("cc").innerHTML += c

}


    
    
};





var Dvds = [
                        {
      title: 'Lawrence of Arabia',
      author: 'T.E.Lawrence',
      genre: 'historical drama',
      publisher: 'Columbia Pictures',
        img: "img/Lawrence_of_arabia.jpg",  
      rating: '-',
      time: ' Minutes: 222'   
      },

 {
      title: 'City lights',
      author: 'Charlie Chaplin',
      genre: 'romantic comedy',
      publisher: 'United Artists',
        img: "img/citylights_image.jpg",  
      rating: '-' ,
      time: 'Minutes: 87'
      },

];

var i = 0
         
        
    for (i = 0; i < Dvds.length; i++) {

 document.getElementById("dd").innerHTML +=('<div class="item col-lg-4" >'

                                         + "<article>"
        
                                          + '<div class="card ' + i +'">'
                                          +"<img src=" + '"'+ Dvds[i].img +'"' + "style=50%>"
                                          + "<h1>Title: " + Dvds[i].title + "</h1>"
                                          + "<h2>Author: " + Dvds[i].author + "</h2>"
                                          + "<p>Gener: " + Dvds[i].genre + "</p>"
                                          + "<p>Publisher: " + Dvds[i].publisher + "</p>"
                                          + "<p>Time: " + Dvds[i].time + "</p>"
                                          +"<p>Rating: " + Dvds[i].rating + "</p>"

                                          +"</div>"
          
                                          +"</article>"
                                          +"</div>" );

        

  };




  function AddDvds() {
    title1 = document.getElementById("title1").value;
    author1 = document.getElementById("author1").value;
    genre1 = document.getElementById("genre1").value;
    publisher1 = document.getElementById("publisher1").value;
    img1 = document.getElementById("img1").value;
    time1 = document.getElementById("time1").value;
    rating1 = document.getElementById("rating1").value;

    var terror = document.getElementById("title1"),
       aerror = document.getElementById("author1"),
       ierror = document.getElementById("img1");
    
    
    
    d = ('<div class="item col-lg-4" >' + '<article>' + '<div class="card">' + '<img src="' + img1 +'"style=50%>' + '<h1>Title: ' + title1 + '</h1>' + '<h2>Author: ' + author1 + '</h2>' + '<p>Renre: ' + genre1 + '</p>' + '<p>Publisher: ' + publisher1 + '</p>' + '<p>Time: ' + time1 + '</p>' + '<p>Reting: ' + rating1 + '</p>' + '</div>' + '</article>' + '</div>' );


 ddd = Dvds.push(d);

 
 if (title1 == "" || author1 == "" || img1 == "") {

  document.getElementById("error1").innerHTML= "full the empte bars please !"

  terror.classList.add("errors");
   aerror.classList.add("errors");
   ierror.classList.add("errors");

}else{

document.getElementById("error1").innerHTML = "DONE ! ";
    terror.classList.remove("errors");
   aerror.classList.remove("errors");
   ierror.classList.remove("errors");

document.getElementById("dd").innerHTML += d

};


   
    
    
};


var Books = [
                        {
      title: 'Woodwalkers',
      author: 'Katja Brandis',
      genre: 'belletristik',
      publisher: 'Bild',
        img: "img/woodwalkers.jpg",  
      rating: '5',
      weight: '1'   
      },

 {
      title: 'Foundation',
      author: 'Isaac Asimov',
      genre: 'fantasy science fiction',
      publisher: 'Heyne',
        img: "img/fondation-asimov.jpg",  
      rating: '5' ,
      weight: '2 kg'
      },

];


var i = 0
         
        
    for (i = 0; i < Books.length; i++) {

 document.getElementById("bb").innerHTML +=('<div class="item col-lg-4" >'

                                         + "<article>"
        
                                          + '<div class="card ' + i +'">'
                                          +"<img src=" + '"'+ Books[i].img +'"' + "style=50%>"
                                          + "<h1>Title: " + Books[i].title + "</h1>"
                                          + "<h2>Author: " + Books[i].author + "</h2>"
                                          + "<p>Gener: " + Books[i].genre + "</p>"
                                          + "<p>Publisher: " + Books[i].publisher + "</p>"
                                          +"<p>Rating: " + Books[i].rating + "</p>"

                                          +"</div>"
          
                                          +"</article>"
                                          +"</div>" );

        

  };




    function AddBooks() {
    title2 = document.getElementById("title2").value;
    author2 = document.getElementById("author2").value;
    genre2 = document.getElementById("genre2").value;
    publisher2 = document.getElementById("publisher2").value;
    img2 = document.getElementById("img2").value;
    weight = document.getElementById("weight").value;
    
    var terror = document.getElementById("title2"),
         aerror = document.getElementById("author2"),
         ierror = document.getElementById("img2");
    
    
    b = ('<div class="item col-lg-4" >' + '<article>' + '<div class="card">' + '<img src="' + img2 +'"style=50%>' + '<h1>Title: ' + title2 + '</h1>' + '<h2>Author: ' + author2 + '</h2>' + '<p>Gener: ' + genre2 + '</p>' + '<p>Publisher: ' + publisher2 + '</p>' + '</p>' + '<p>weight: ' + weight + '</p>' + '</div>' + '</article>' + '</div>' );


 bbb = Books.push(b);

 

 if (title2 == "" || author2 == "" || img2 == "") {

  document.getElementById("error2").innerHTML= "full the empte bars please !"

  terror.classList.add("errors");
   aerror.classList.add("errors");
   ierror.classList.add("errors");

}else{

document.getElementById("error2").innerHTML = "DONE ! ";
    terror.classList.remove("errors");
   aerror.classList.remove("errors");
   ierror.classList.remove("errors");

   document.getElementById("bb").innerHTML += b

};


   
    
    
};





var Comics = [
                        {
      title: 'The Sandman',
      author: 'Neil Gaiman',
      genre: 'fantasy',
      publisher: 'Vertigo',
        img: "img/Sandman.jpg",   
      },

 {
      title: 'Modesty Blaise',
      author: "Peter O'Donnell",
      genre: 'mystery',
      publisher: 'Titan Books',
        img: "img/modesty1.jpg",  
    
      },

];



var i = 0
         
        
    for (i = 0; i < Comics.length; i++) {

 document.getElementById("co").innerHTML +=('<div class="item col-lg-4" >'

                                         + "<article>"
        
                                          + '<div class="card ' + i +'">'
                                          +"<img src=" + '"'+ Comics[i].img +'"' + "style=50%>"
                                          + "<h1>Title: " + Comics[i].title + "</h1>"
                                          + "<h2>Author: " + Comics[i].author + "</h2>"
                                          + "<p>Rener: " + Comics[i].genre + "</p>"
                                          + "<p>Publisher: " + Comics[i].publisher + "</p>"

                                          +"</div>"
          
                                          +"</article>"
                                          +"</div>" );

        

  };


      function AddComics() {
    title3 = document.getElementById("title3").value;
    author3 = document.getElementById("author3").value;
    genre3 = document.getElementById("genre3").value;
    publisher3 = document.getElementById("publisher3").value;
    img3 = document.getElementById("img3").value;
  
    var terror = document.getElementById("title3"),
        aerror = document.getElementById("author3"),
         ierror = document.getElementById("img3");
    
    
    co = ('<div class="item col-lg-4" >' + '<article>' + '<div class="card">' + '<img src="' + img3 +'"style=50%>' + '<h1>Title: ' + title3 + '</h1>' + '<h2>Author: ' + author3 + '</h2>' + '<p>Gener: ' + genre3 + '</p>' + '<p>Publisher:' + publisher3 + '</p>' + '</p>' + '</div>' + '</article>' + '</div>' );


 coco = Books.push(co);

 
  if (title3 == "" || author3 == "" || img3 == "") {

  document.getElementById("error3").innerHTML= "full the empte bars please !"

  terror.classList.add("errors");
   aerror.classList.add("errors");
   ierror.classList.add("errors");

}else{

document.getElementById("error3").innerHTML = "DONE ! ";
    terror.classList.remove("errors");
   aerror.classList.remove("errors");
   ierror.classList.remove("errors");

document.getElementById("co").innerHTML += co

};


   
    
    
};



