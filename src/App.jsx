import "../src/styles/globals.scss";
import { Contact } from "./components/Contact";
import { DataContextProvider } from "./context/DataContext";
import { Services } from "./components/Services/index";
import { Slider } from "./components/Carousel/Slider";

function App() {
  return (
    <DataContextProvider>
      <Slider />
      <Services />
      <Contact />
    </DataContextProvider>
  );
}

export default App;
