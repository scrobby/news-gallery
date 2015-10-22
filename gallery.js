// JavaScript Document

//set global variables
var animationTime = 500;

//calculate the widths based on the number of articles
var articles = $( ".article", "#galleryWrapper" );
var numberOfArticles = articles.length;

var galleryWidth = $( "#galleryWrapper" ).width();

var openWidth = galleryWidth * 0.6;
var closedWidth = (galleryWidth * 0.4) / (numberOfArticles - 1);


//set the widths of the article text wrappers and move them off screen
updateArticleTextWrapperWidth();

//show the left hand article
showArticle(articles[0], false);
$( ".articleTextWrapper" ).css("bottom", "-300px");

//set up response to mouse over
$( ".article", "#galleryWrapper" ).mouseenter(function() {
    showArticle(this, true);
});


//handle which article to show
function showArticle(articleToShow, animated) {
    var aTime = animationTime;
    
    if (!animated) {
        aTime = 1;
    }
    
    for (var i = 0; i < numberOfArticles; i++) {
        var currentArticle = articles[i];
        var currentTextWrapper = $( currentArticle ).find( ".articleTextWrapper" );
        var textWrapperHeight = $( currentTextWrapper ).height() + 20;
        
        //open the article hovered over and close the others
        if (currentArticle == articleToShow) {
            $( currentArticle ).animate({
                width: openWidth
                }, aTime);
            $( currentTextWrapper ).animate({
                bottom: 0
                }, aTime);
        } else {
            $( currentArticle ).animate({
                width: closedWidth
                }, aTime);
            $( currentTextWrapper ).animate({
                bottom: -textWrapperHeight
                }, aTime);
        }
    }
}


//article text wrapper width
function updateArticleTextWrapperWidth() {
    $( ".articleTextWrapper" ).width(openWidth);
}

function print(theLog) {
    $( '#log' ).append(theLog + "<br>");
}