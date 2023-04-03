import "./ItemlistContainer.css";
import Item from "./Item";
function ItemlistContainer() {
  let nombreburger = "cheeseburger";
  let descripcionburger = "Doble carne, Queso cheddar";
  let precioburger = "1600";
  let mensaje = "Gracias por elegirnos";
  return (
    <div className="item-list-container">
      <Item
        nombre={nombreburger}
        imagen=""
        descripcion={descripcionburger}
        precio={precioburger}
      />
      <Item greeting={mensaje} />
    </div>
  );
}
export default ItemlistContainer;
