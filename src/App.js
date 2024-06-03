import logo from "./logo.svg";
import "./App.css";
import { HitStatus } from "./HitStatus";
import { MultipleInputs } from "./MultipleInputs";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-800 flex py-3 font-semibold text-white items-center w-full justify-around">
        <img
          src="https://www.nttdata.com/global/en/-/media/assets/images/header_logo.svg?iar=0&rev=fdca9740db7f4e0fb43d99e56339f876"
          alt="Ntt Data logo"
        />
        <h1 className="text-2xl font-bold ">Unwrap comments</h1>
      </header>
      <main>
        <MultipleInputs />
      </main>
    </div>
  );
}

export default App;
