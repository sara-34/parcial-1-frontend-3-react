import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Pedido from "./components/Pedido";

const pedidos = [
  { id: 1, name: "Brochas" },
  { id: 2, name: "Sombras" },
  { id: 3, name: "Pinta Labios" },
  { id: 4, name: "Esmaltes" },
];

let id = 0

function App() {
  const [pedidos, setPedidos] = useState([]);

  const handleAddPedido = (pedido) => {
    const newPedido = [...pedidos];
    newPedido.push({
      id: id++,
      name: pedido,
    });
    setPedidos(newPedido);
  };

  const handleDeletePedido = (id) => {
    const newPedido = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(newPedido);
  };

  console.log(pedidos);

  return (
    <div className="App">
      <Header title="Realiza Tu consulta" />
      <Formulario onAgregar={handleAddPedido} />
      <hr />
      {/* <ListPedidos list = {pedidos}/> */}
      {pedidos.map((pedido) => {
        return (
          <Pedido
            key={pedido.id}
            pedido={pedido}
            onDelete={handleDeletePedido}
          />
        );
      })}
    </div>
  );
}

export default App;
