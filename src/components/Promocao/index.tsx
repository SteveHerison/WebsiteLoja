const Promocao = () => {
  return (
    <section className="absolute top-40 left-2 max-h-full">
      <article className="h-96 w-96 bg-yellow-950 text-red-100">
        <figure className="flex flex-col items-center h-full w-full p-2">
          <h2 className="text-3xl text-center">
            Seja bem vindo <br />
            <p className="text-2xl"> Ao </p>
            <span className="text-3xl">Delicias da Manda</span>
          </h2>
          <div className="h-full flex items-center justify-center bg-rose-100 w-full">
            <span className="text-xl  text-yellow-950 h-full flex items-center">
              <p>O valor Promocional valido até 23/09</p>
            </span>
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Promocao;
