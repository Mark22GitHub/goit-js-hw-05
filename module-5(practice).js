// const CarCreator = function (name, age, color, fuelType, weight, speed) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.fuelType = fuelType;
//   this.weight = weight;
//   this.speed = speed;

//   this.checkAcceleration = function () {
//     this.acceleration = this.weight * this.speed;

//     console.log(this.acceleration);
//   };
// };

// const ferrari = new CarCreator("Ferrari", 5, "red", "gas", 1200, 320);

// console.log(ferrari);
// ferrari.checkAcceleration();

// const Nature = function (name, sex, skin, freeTime, aLotOfAlcohol) {
//   this.name = name;
//   this.sex = sex;
//   this.skin = skin;
//   this.freeTime = freeTime;
//   this.aLotOfAlcohol = aLotOfAlcohol;

//   this.createFuckUp = function () {
//     this.fuckUp = this.freeTime * this.aLotOfAlcohol;

//     console.log(this.fuckUp);
//   };
// };

// const parasite = new Nature("Donald Duck", "undefined", "blue", 24 / 7, 5);
// console.log(parasite);
// parasite.createFuckUp();

// const wisdomPerson = new Nature("Elon Musk", "male", "white", 4, 0);
// console.log(wisdomPerson);
// wisdomPerson.createFuckUp();

// ===================================================
// Напиши функцию - конструкор User для создания
// пользователя со следующим свойствами:

// - name - строка(имя)
// - age - число(возраст)
// - friends - число(кол - во друзей)

// Имя, возраст и друзей, будут переданы при вызове конструктора User.

// Добавь метод getInfo(), который, выводит строку:

// `User ${имя} is ${возраст} years old and has ${кол - во друщзей} friends`

// const User = function (name, age, friends) {
//   this.name = name;
//   this.age = age;
//   this.friends = friends;

//   this.getInfo = function () {
//     console.log(`User ${name} is ${age} years old and has ${friends} friends`);
//   };
// };

// const friend = new User("Andrew", 65, 2);

// friend.getInfo();

// ===================================================

// const House = function (doors, roof, windows, color) {
//   this.ground = 50;
//   this.doors = doors;
//   this.windows = windows;
//   this.roof = roof;
//   this.color = color;
// };

// House.prototype.changeColor = function (color) {
//   this.color = color;
// };

// House.prototype.changeDoors = function (doors) {
//   this.doors = doors;
// };

// const newHouse = new House(2, 10, 4, "rainbow");
// console.log(newHouse);

// newHouse.changeColor("purple");
// console.log(newHouse);

// newHouse.changeDoors(100);
// console.log(newHouse);

// const windows = [
//   { name: "1", count: 4 },
//   { name: "2", count: 4 },
//   { name: "3", count: 4 },
//   { name: "4", count: 4 },
// ];

// const myHouse = new House(1, windows, 1, "orange");

// console.log(myHouse);

// House.prototype.upgradeWindows = function (name, number) {
//   this.windows = windows;
//   console.log(this.windows);

//   for (let window of this.windows) {
//     console.log(window);

//     if (window.name === name) {
//       return (window.count = number);
//     }
//   }
// };

// myHouse.upgradeWindows("1", 10);

// console.log(myHouse);

// myHouse.upgradeWindows("4", 1000000000000);

// console.log(myHouse);
// //  ===================================================

// const Bouquet = function (
//   flowers = "",
//   bottles = 0,
//   octopus = 0,
//   fruits = "",
//   sweets = "",
//   vegetables = "",
//   sausages = ""
// ) {
//   this.isDeliver = false;
//   this.flowers = flowers;
//   this.bottles = bottles;
//   this.octopus = octopus;
//   this.fruits = fruits;
//   this.sweets = sweets;
//   this.vegetables = vegetables;
//   this.sausages = sausages;
// };

// const myBouquet = new Bouquet(
//   "roses",
//   undefined,
//   undefined,
//   undefined,
//   "sugar"
// );
// console.log(myBouquet);

// Bouquet.prototype.changesFlowers = function (value) {
//   if (!this.isDeliver) {
//     return (this.flowers = value);
//   }
//   return "Order is delivered!";
// };

// Bouquet.prototype.toggleProp = function () {
//   if (this.isDeliver) return (this.isDeliver = false);
//   if (!this.isDeliver) return (this.isDeliver = true);
// };

// console.log(myBouquet.changesFlowers("peony"));
// console.log(myBouquet);

// myBouquet.isDeliver = true;
// console.log(myBouquet);

// console.log(myBouquet.changesFlowers("cactus"));

// myBouquet.toggleProp();
// console.log(myBouquet);

// console.log(myBouquet.changesFlowers("cactus"));
// console.log(myBouquet);

// myBouquet.toggleProp();
// console.log(myBouquet);

// +++++++++++++++++++++++++++++++++++++++++

// Переделываем задачу Bouquet на класс

// class Bouquet {
//   constructor(
//     flowers = "",
//     bottles = 0,
//     octopus = 0,
//     fruits = "",
//     sweets = "",
//     vegetables = "",
//     sausages = ""
//   ) {
//     this.isDeliver = false;
//     this.flowers = flowers;
//     this.bottles = bottles;
//     this.octopus = octopus;
//     this.fruits = fruits;
//     this.sweets = sweets;
//     this.vegetables = vegetables;
//     this.sausages = sausages;
//   }
//   changesFlowers(value) {
//     if (!this.isDeliver) {
//       return (this.flowers = value);
//     }
//     return "Order is delivered!";
//   }
//   toggleProp() {
//     if (this.isDeliver) return (this.isDeliver = false);
//     if (!this.isDeliver) return (this.isDeliver = true);
//   }
// }

// const myBouquet = new Bouquet(
//   "roses",
//   undefined,
//   undefined,
//   undefined,
//   "sugar"
// );

// console.log(myBouquet.changesFlowers("peony"));
// console.log(myBouquet);

// myBouquet.isDeliver = true;
// console.log(myBouquet);

// console.log(myBouquet.changesFlowers("cactus"));

// myBouquet.toggleProp();
// console.log(myBouquet);

// console.log(myBouquet.changesFlowers("cactus"));
// console.log(myBouquet);

// myBouquet.toggleProp();
// console.log(myBouquet);

// +++++++++++++++++++++++++++++++++++++++++

// //  ===================================================

// ================================CLASSES==============================

// class Cats {
//   constructor(whiskers, teeth, tail, claws) {
//     this.whiskers = whiskers;
//     this.teeth = teeth;
//     this.tail = tail;
//     this.claws = claws;
//   }

//   get catsInfo() {
//     console.log(`Everyone in Cats class has umpa-lumpa`);
//   }
// }

// class Lions extends Cats {
//   constructor(whiskers, teeth, tail, claws, mane) {
//     super(whiskers, teeth, tail, claws);
//     this.mane = mane;
//   }

//   get showMeRoar() {
//     console.log("Roar!");
//   }

//   get getName() {
//     console.log(this.name);
//   }

//   set setName(name) {
//     this.name = name;
//   }
// }

// class Kitty extends Cats {
//   constructor(whiskers, teeth, tail, claws, scratch) {
//     super(whiskers, teeth, tail, claws);
//     this.scratch = scratch;
//   }

//   get stopScratch() {
//     console.log(`Stop scratching my wallpapers , you little peace of %#!`);
//   }

//   set setClaws(claws) {
//     this.claws = claws;
//   }
// }

// let jack = new Lions(true, true, true, true, true);
// console.log(jack);

// let kitty = new Kitty(true, false, "bold", true, true);
// console.log(kitty);

// jack.showMeRoar;
// jack.setName = "Jack";
// jack.getName;

// kitty.stopScratch;
// kitty.setClaws = "Kitty has big Irish claws";

// =============================================

// let borys = {
//   name: "Borys",
//   xp: 200,
// };

// class Hero {
//   constructor({ name, xp }) {
//     this.name = name;
//     this.xp = xp;
//   }
// }

// let hero1 = new Hero(borys);
// console.log(hero1);

// / =============================================

// Перебирающие методы массива

// let arr = [1, 2, 3, 4, 5, 6];
// // ====================
// // 2. Array.prototype.forEach()
// arr.forEach((el) => console.log(el * 2));
// // ====================

// // ====================
// // 3. Array.prototype.map()
// arr.map((el) => el * 2);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
// ];

// const name = users.map((el) => `${el.name} isActive : ${isActive}`);
// console.log(name);
// // ====================

// // ====================
// // 4. Array.prototype.filter()
// const active = users.filter((el) => el.isActive);
// console.log(active);
// // ====================

// // ====================
// // 5. Array.prototype.find()
// const poly = users.find(el => el.name === "Poly"
//   console.log(poly);
// // ====================

// // ====================
// // 6. Array.prototype.every() и
// const every = users.every(el=> el.salary>100)
// console.log(every);
// // Array.prototype.some()
// const some = users.some(el=> el.salary>100)
// console.log(some);
// // ====================

// ===========================

// ===========================
