import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você leu ${count} vezes`;
  }, [count]);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui para registrar a qtd de livros lidos
      </button>
    </div>
  );
}

export default MyComponent;
