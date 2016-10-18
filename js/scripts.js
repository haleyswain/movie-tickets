  var price = 10;

  function Ticket(age, movie, showtimes) {
    this.age = age;
    this.movie = movie;
    this.showtimes = showtimes;
  };
  Ticket.prototype.movietime = function(age) {
    if (age === "youth" || age ==="senior") {
      return price * .667;
    } else {
      return price;
    }
  }


$(document).ready(function() {
  $("form#movie-house").submit(function(event) {
    event.preventDefault();
    alert("hi");

    var age = $("#age").val();
    $("ul#movietime").append("<li>" + movietime + "</li>");
    });
    });
  };
