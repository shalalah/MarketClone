import Product from "./component/Product";
import { dummy } from "./dummy";
import './App.css';

function App() {
  return (
    <div className="App">
      <Product />
      {dummy.map((item,index) => (
        <Product key={item.id} img={item.src} alt={item.alt} title={item.title} />
      ))}
    </div>
  );
}

export default App;
