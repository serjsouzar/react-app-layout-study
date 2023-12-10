import { GlobalStyle } from "./GlobalStyles";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Prizes from "./components/Prizes/Prizes";


function App() {
  return (
    <div>      
      <Header />
      <Banner />
      <Prizes />
      <GlobalStyle />
    </div>
  );
}

export default App;
