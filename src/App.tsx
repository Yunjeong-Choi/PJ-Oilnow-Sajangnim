// import Navigation from './components/navigation';
import Container from "./components/container";
import CancelModal from "./components/modal/cancel";
import { useState } from "react";

function App() {
  const [isCancelModalOpened, setCancelOpened] = useState<boolean>();


  return (
    <div className="App">
      {/* <Navigation /> */}
      <Container />
      {isCancelModalOpened && <CancelModal />}
    </div>
  );
}

export default App;
