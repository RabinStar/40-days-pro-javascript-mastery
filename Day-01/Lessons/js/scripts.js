console.log("This js file is loaded from head tag with no attributes!");

// If it is loaded from End fo Body tag.
// No Erorr.
// But loaded from head tag.
// TypeErorr: null is founded.
// For this Erorr we can solve 2 ways more...
// 1. Add async attribute *** This For External Js file which
//      does not effect main js file or web apps. 
// 2. And add defer attribute *** Note: This is perfect Way.
document.getElementById("test").innerHTML = "Happy Js coding!";

