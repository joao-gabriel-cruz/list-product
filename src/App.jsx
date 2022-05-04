import { useEffect, useState } from 'react';
import ListaProdutos from './components/listaProdutos';

function App() {
  const [produtos, setProduto] = useState({});
  useEffect(() => {
    fetch('http://localhost:3001/api/produto')
      .then((response) => response.json())
      .then((json) => setProduto(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;
