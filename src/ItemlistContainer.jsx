import "./ItemlistContainer.css";
import Item from "./Item";
function ItemlistContainer() {
  let nombreburger = "cheeseburger";
  let descripcionburger = "Doble carne, Queso cheddar";
  let precioburger = "1600";
  return (
    <div className="item-list-container">
      <Item
        nombre={nombreburger}
        imagen=""
        descripcion={descripcionburger}
        precio={precioburger}
      />
    </div>
  );
}
export default ItemlistContainer;
