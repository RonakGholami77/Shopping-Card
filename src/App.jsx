import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Shop from "./Shop/Shop";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <Shop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
