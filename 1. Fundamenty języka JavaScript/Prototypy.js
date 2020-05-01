function Vehicle(name, brand, color) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.engineStatus = "off";
}

Vehicle.prototype.startEngine = function () {
  this.engineStatus = "ON";
  console.log(`Engine of a ${this.name} ${this.brand} is ${this.engineStatus}`);
};

Vehicle.prototype.stopEngine = function () {
  this.engineStatus = "OFF";
  console.log(`Engine of ${this.name} ${this.brand} is ${this.engineStatus}`);
};

const car1 = new Vehicle("Saab", "9-3", "Black");
console.log(car1);
car1.startEngine();
car1.stopEngine();
