let burgers = [
  {
    id: "1",
    name: "Cheeseburger",
    img: "../public/chesseburger.jpg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "2",
    name: "Classic",
    img: "../public/classic.jpg ",
    description: "Doble carne, Doble cheddar, Lechuga, Tomate, Cebolla",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "3",
    name: "Gran Chamaco",
    img: "../public/granchamaco.jpg ",
    description: "Doble carne, Doble cheddar, Bacon x2",
    price: 1500,
    stock: 20,
    quantity: 1,
  },
  {
    id: "4",
    name: "EggBacon",
    img: "../public/eggbacon.jpg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "5",
    name: "La Chamaca",
    img: "../public/lachamaca.jpg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "6",
    name: "Oklahoma",
    img: "../public/oklahoma.jpeg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "7",
    name: "Rikifort",
    img: "../public/rikifort.jpg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "8",
    name: "Crispyioli",
    img: "../public/crispyoli.jpg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "9",
    name: "Cheesebacon",
    img: "../public/cheesebacon.jpeg ",
    description: "Doble carne, Doble cheddar",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
  {
    id: "10",
    name: "Voraz",
    img: "../public/voraz.jpg ",
    description:
      "Doble carne, Doble porovolone, cebolla carameliza, chimichurri",
    price: 1500,
    stock: 999,
    quantity: 1,
  },
];
const task = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(burgers);
    }, 1500); // retraso de 3 segundos (3000 ms)
  });
};
export default task;
