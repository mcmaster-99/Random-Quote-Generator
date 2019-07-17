// These are the colors (10) used to change the background color upon new quote button click.
var colors = ["#C0392B", //MAROON
              "#E74C3C", //RED
              "#8E44AD", //PURPLE
              "#2980B9", //NAVY
              "#3498DB", //BLUE
              "#1ABC9C", //LIGHT-GREEN
              "#D35400", //RED-BROWN
              "#34495E", //DARK-GREY
              "#B7950B", //GOLD
              "#5D6D7E"];//GREY

/*
======================================================================
====Function to fetch new quote (using AJAX) from quotesdesign API====
======================================================================
*/
function randomQuote(){
  // Data Extraction Using Ajax (quote)
  $.ajax({
    url: "https://api.quotable.io/random",
    type: "GET",
    success: function(data){
      console.log(data)
      $(".quote").html(data.content + "<br>" + "-" + data.author).fadeIn();
    },
    error: function(){
      alert("Cannot open URL.");
    }
  });
}

/*
====================
===Tweet Function===
====================
*/
function tweet() {
  $(".twitter-share-button").click(function() {
      window.open("https://twitter.com/intent/tweet?text=" + $(".quote").text());
  });
}




/*
========================
===DOC READY FUNCTION===
========================
*/
$(document).ready(function() {

  // ------------------------------------------------------------------
  // ------------------ WHEN PAGE IS FIRST LOADED ---------------------
  // ------------------------------------------------------------------
  randomQuote();
  tweet();
  
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("body").css({
      "background": randomColor,
      "transition": "all 4s ease"
    });
  
  // Color fader
  $(".quote").fadeOut(function(){
      $(this).css("color", randomColor);
    }).fadeIn("slow");
  

  // ------------------------------------------------------------------
  // -------------- WHEN "NEW QUOTE" BUTTON IS CLICKED ----------------
  // ------------------------------------------------------------------
  $("#getmessage").click(function() {
    tweet();
  
    
    // Color Generator
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("body").css({
      "background": randomColor,
      "transition": "all 4s ease"
    });
    
    // COLOR FADER
    $(".quote").fadeOut(function(){
      $(this).css("color", randomColor);
      randomQuote();
    }).fadeIn("slow");
    
    // AUTHOR STYLING
    $(".quoteAuthor").css({
      "color": randomColor,
      "transition": "all 2s ease"
    });
    
    // QUOTATION STYLING
    $("#quotations").css({
      "color": randomColor,
      "transition": "all 2s ease"
    });
    
  }); // END RANDOM QUOTE BUTTON
  
});