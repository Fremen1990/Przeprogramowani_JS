console.log("hello world");

console.debug("robal");

console.warn("ostrzeżenie");

console.error("błąd");

console.trace("nawigowanie bledu");

console.groupCollapsed("Grupa console log");
console.log("hello world");
console.debug("robal");
console.warn("ostrzeżenie");
console.error("błąd");
console.trace("nawigowanie bledu");
console.groupEnd();

console.clear();

console.count("nazwa licznika");
console.countReset("nazwa licznika");

console.dirxml(document.body);

console.dir(document.body);

console.clear();

function Car(marka, model, rocznik) {
  this.marka = marka;
  this.model = model;
  this.rocznik = rocznik;
}

const myCar = new Car("Saab", "9 - 3", "2006");

console.table(myCar);
