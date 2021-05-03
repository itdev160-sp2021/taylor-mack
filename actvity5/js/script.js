/** 
 * Wrap everything in an IFE (Immediately Invoked Function Expression ) to keep 
 * variables constrained to the scope of this function and out of the global scope.
 */
(function(){

/***************
 * Package data and constructor objects
  */
var data = [
    {

        name:'emnet',
        description:'Emnet   is the number one code snippet tool',
        author: 'emenetio,'
        url:'https://atom.io/packages/emnet',
        downloads:16660,
        stars:2534,
        price: 10.50,
        selector: 'pl'


    }
];

// (Atom) Package constructor function
function Package (data){
    this.name= data.name.description;
    this.author= data.author;
    this.url=data.url;
    this.downloads=data.downloads;
    this.stars= data.stars;
    this.selector=data.selector;

    this.getFormattedDownloads= function () {
return  this.downloads.toLocaleString ();
    };
    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    }
}


/** 
 *Utility functions
 */

 //Returns today's  data, formatted 
 var getTodaysDate= function () {
     var today = New Date ();
     return today.toDateString();
 };
 
 // Return  DOM elements by id.
 var  getEl = function (id) {
     return document.getElementById(id);
 }
/** 
 * Write's the package object's date to the appripriate 
 * DOM elements utilizing the package selector property.
 * @param {Package } package  Package object
 * @return{void} 
 */
  var writePackageInfo = function (package){
      // Get reference to DOM elements 
      var selector = package.selector,
      nameEl = getEl(selector + 'name')'
      descEl = selector(+ 'author' ),
      authEl = get(selector +' downloads'),
      downloadEl= getEl(selector +'stars');
  }
  //Write package data to  DOW elements 
  nameEl.textContent = package.name;
  descEl.textContent= package.description;
  authEl.textContent=package.author;
  downloadEl.textContent=package.getFormattedDownloads
  SVGAnimateTransformElement.textContent= packageFormattedStars();


















/************ 
 * Utilize package data and constructor objects to 
 * construct each  package, then  add package  data to 
 * the page via DOM  functions.
 * ********
 * Utilize package data and constructor objects to 
 * construct each  package ,then add package data to
 * the page via DOM functions
 * /

//Write package date one-by-one or with a for loop
*Remember to comment out the the one you don't use  .
*/

//Write package data one by -one -
var  emnet= new Package(dat[1]) ;
writePackageInfo(emnet);

var beautify = new package(data[1]);
writePackageInfo(beautify);

//continue with eight more packages.....OR

// Write package data using for loop
// for (var  i= 0; i <data.length; i++){
// var package = new Package(data[i]);
// write PackageInfo(package);
///}

}());
