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
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1callback=?",
      type: "GET",
      datatype: 'jsonp',
      cache: false,
      
      success:function(data){
        
        $(".quote").html(data[0].content + "-" + data[0].title).fadeIn();
        
      },
      
      error:function(){
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
  // Start off with a quote and tweet option when page loads
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
  

  // RANDOM QUOTE BUTTON START
  $("#getmessage").click(function() {
    randomQuote();
    
    // TWEET BUTTON
    tweet();
    
    // COLOR FADER
    $(".quote").fadeOut(function(){
      $(this).css("color", randomColor);
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