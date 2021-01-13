import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:name" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
