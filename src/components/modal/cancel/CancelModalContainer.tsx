import ModalContainer from "../ModalContainer";
import CancelList from "./CancelList";
import CancelReason from "./CancelReason";
import CancelButtons from "./CancelButtons";

const CancelModalContainer = () => {
  return (
    <ModalContainer>
      <CancelList />
      <CancelReason />
      <CancelButtons />
    </ModalContainer>
  );
};

export default CancelModalContainer;
