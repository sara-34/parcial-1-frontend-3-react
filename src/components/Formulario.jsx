import { useState } from "react";
import Card from "./Card";

const Formulario = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [ error, guardarError] = useState(false)

  const handleChange = (e) => {
    const cleanValue = e.target.value.trim();
    setInputValue(cleanValue);
  };

  const handlePedido = (e) => {
    const cleanPedido = e.target.value.trim();
    setInputValue(cleanPedido);

  }





  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
        alert('Asegurate de que tu informacion este completa')
      return
    }

    console.log("enviando...", inputValue);
    props.onAgregar(inputValue)
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Ingresa tu nombre"/>
        <input type="text" value={inputValue} onChange={handlePedido} placeholder="Ingresa el producto"/>
        <button className="pedido" type="submit">Realizar Pedido</button>
      </form>
    </Card>
  );
};

export default Formulario;