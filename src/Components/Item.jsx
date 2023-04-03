import "./ItemlistContainer";
const Item = (props) => {
  return (
    <>
      <article className="list-item">
        <h4 className="card-title">{props.nombre}</h4>
        <img src="" alt="" srcset="" />

        <p className="card-description">{props.descripcion}</p>
        <p className="precio">${props.precio}</p>
      </article>
      <p className="gracias">{props.greeting}</p>
    </>
  );
};
export default Item;