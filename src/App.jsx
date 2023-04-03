import "./App.css";

import Title from "./Title";
import Navbarjs from "./Header";
import ItemlistContainer from "./ItemlistContainer";
import Item from "./Item";
function App() {
  return (
    <div>
      <Navbarjs />
      <Title />
      <ItemlistContainer>
        <Item
          nombre="CheeseBurger"
          imagen=""
          descripcion="Doble carne, Queso cheddar"
          precio="1600"
        />
      </ItemlistContainer>
    </div>
  );
}

export default App;
