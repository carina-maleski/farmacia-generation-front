import homeLogo from "../../assets/icone.png";

function Home() {
  return (
    <>
      <div className="bg-red-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold">Farmácia 71</h2>
            <p className="text-xl">Seu bem-estar é nossa prioridade.</p>
            <div className="flex justify-around gap-4">
              <button className="rounded bg-white/20 text-white py-2 px-4 font-semibold border border-white hover:bg-red-950/50 hover:text-white">
                Conheça nossos produtos
              </button>
              <button className="rounded bg-white/20 text-white py-2 px-4 font-semibold border border-white hover:bg-red-950/50 hover:text-white">
                Encontre por categoria
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={homeLogo} alt="icone de remédios" className="w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
