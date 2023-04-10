let burgers = [
  {
    id: "1",
    name: "Cheeseburger",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "2",
    name: "Classic",
    description: "Doble carne, Doble cheddar, Lechuga, Tomate, Cebolla",
    stock: 999,
  },
  {
    id: "3",
    name: "Gran Chamaco",
    description: "Doble carne, Doble cheddar, Bacon x2",
    stock: 20,
  },
  {
    id: "4",
    name: "EggBacon",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "5",
    name: "La Chamaca",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "6",
    name: "Oklahoma",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "7",
    name: "Rikifort",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "8",
    name: "Crispyioli",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "9",
    name: "Cheesebacon",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
  {
    id: "10",
    name: "Chamapork",
    description: "Doble carne, Doble cheddar",
    stock: 999,
  },
];
let task = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(burgers);
    }, 3000); // retraso de 3 segundos (3000 ms)
  });
};
export default task;
