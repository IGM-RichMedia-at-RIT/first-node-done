// Define our new class
class Polygon {
  // our constructor
  constructor(height, width) {
    this.height = height; // set attributes
    this.width = width; // set attributes
  }
}

// Example of how to make an object of the class
const p = new Polygon(10, 15);
console.log(p.height); // calling one of our attributes

// Export the entire class as the module itself.
// This allows us to just call new Polygon in other classes.
// If there is more you have to export besides the class,
// then there are other ways to export.
module.exports = Polygon;
