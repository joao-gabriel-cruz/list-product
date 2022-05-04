function ListaProdutos(props) {
  console.log(props.produtos);

  return (
    <div className="bg-sky-100 flex-col space-y-5 p-5 rounded-xl  ">
      <div className="text-center">
        <h1 className="text-4xl">Produtos</h1>
      </div>
      <div className="flex flex-col">
        {props.produtos.length > 0 ? (
          props.produtos.map((item) => (
            <div
              key={props.produtos.id}
              className="bg-sky-100 space-y-5 border-solid border-4 border-white m-2 p-2 font-normal "
            >
              <div>
                <h2>Produto: {item.nome}</h2>
              </div>
              <div className="space-y-5">
                <p>ID: {item.id}</p>
                <p>preço: {item.preco}</p>
                <p>categoria id: {item.categoria_id} </p>
                <p>descrição: {item.descricao} </p>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default ListaProdutos;
