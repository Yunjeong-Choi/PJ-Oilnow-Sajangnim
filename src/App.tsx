import Container from "./components/container";
import CancelModal from "./components/modal/cancel";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div className="App">
      {/* <Navigation /> */}
      <Container />
      {isModalOpen && <CancelModal />}
    </div>
  );
}

export default App;
