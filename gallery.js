// JavaScript Document

print("Hello");

var articles = $( ".article" );
var numberOfArticles = articles.length;

print(numberOfArticles);

var galleryWidth = $( "#galleryWrapper" ).width();

print(galleryWidth);

var openWidth = galleryWidth * 0.6;
var closedWidth = (galleryWidth * 0.4) / (numberOfArticles - 1);

print ("Open width: " + openWidth + " | Closed width: " + closedWidth);

for (var i = 0; i < numberOfArticles; i++) {
    print("Run: " + i);
    if (i == 0) {
        $( articles[i] ).width(openWidth);
    } else {
        $( articles[i] ).width(closedWidth);
    }
}

$( ".article" ).mouseover(function() {
    $( this ).width(openWidth);
    
    for (var i = 0; i < numberOfArticles; i++) {
        print("Try: " + i);
        
        if (articles[i] != this) {
            print("Is not the same!");
            $( articles[i] ).width(closedWidth);
        }
    }
});

function print(theLog) {
    $( '#log' ).append(theLog + "<br>");
}