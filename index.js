// Dalida's Tea shop

let employee;
let customer;
const EMPLOYER = "Dalida";
const ADDRESS = "China Town";
const SHOP_NAME = "Dalida's Tea shop ";

const SELLER = "Beknar";
const BADGE = `Name: ${SELLER}`;

let numberEmployees = 2;
let shopIsOpened = false;
let shopIsClosed = true;

employee = "Aidar";
employee = "Murat";

customer = "Aigul";
customer = "Chingiz";
customer = "Samat";

let shopBasket = null;
console.log(shopBasket);

let product = {
  name: "green",
  price: 1500,
  origin: "China",
  "keeping-time": "12.08.2022"
};

product.effect = "relaxing";
delete product.effect;

let color = "label-color";
product[color] = "transparent-green";

let name = "Black tea";
let price = 1100;
let product_new = { name, price };

product.print = function () {
  console.log(this.name + " costs " + this.price);
};

for (elements in product) {
  console.log(elements);
}

let states = ["hot", "iced", "komnotnoy-temperature"];
let teas = ["green", "milked", "black", "rasperry"];
teas.push("oblepiha");
teas.pop();

teas.unshift("strawberry");
teas.shift();

let shopingDrinkOptions = states.concat(teas);

console.log(8 > 8); //false
console.log(2 == 1); //false
console.log(5 != 1); //true
console.log("2" > 1); // true
console.log("42" == 42); //true
console.log(null == undefined); // true

console.log("1" === 1); // false
console.log("042" === 42); //false
console.log(null === undefined); // false

let selectedTea = "strawberry";
let finalBuying = selectedTea ?? "black";
console.log(finalBuying);

teas = ["Black", "Green", "Oolong", "White", "Pu-erh"];

let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "White") {
    count += 1;
  }
}
console.log(count);

let tea = {
  name: "milked",
  price: 1500,
  origin: "Some city"
};

function show({ name: n, price: p }) {
  console.log(`${n} costs ${p}tg`);
}

let countTeas = function () {
  return teas.length;
};

let canBuyProduct = (product) => {
  return teas.includes(product);
};

let blackTea = tea.filter((type) => type === "Black");

const { firstName, lastName, ...otherInfo } = {
  firstName: "Dalida",
  lastName: "Yerkuli",
  companyName: "Dalida's Tea shop",
  profession: "Founder",
  gender: "Female"
};

const greeting = ["Dalida", "Yerkuli", "chaihana"];
const aboutMe = ["Hello World", ...greeting, "tea?"];

const myName = "Dalida Yerkuli";
console.log(aboutMe);
console.log([...myName]);
