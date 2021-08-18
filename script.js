var articles = document.getElementsByTagName("article").length;
console.log("Totalnumber of Article in the page is:-" + articles);
document.write("<br>Totalnumber of Article in the page is:-" + articles);

var links = document.getElementsByTagName("a").length;
console.log("total Number of exit Link- " + links);
document.write("<br>total Number of exit Link- " + links);

var count1 = document.images.length;
console.log("Total Number of page in the page is :-" + count1);
document.write("<br>Number of images in the Page is: " + count1);



var allAnchors = document.getElementById('new');

for (i=0; i < allAnchors.length; i++) {
    var element = allAnchors[i];
    element.addEventListener("click", function (event) {
    event.preventDefault();

    let ref = this.getAttribute("href");
    alert(ref);
  }.bind(element));
}