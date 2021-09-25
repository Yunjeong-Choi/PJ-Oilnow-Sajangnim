import { FunctionComponent } from "react";
import ModalBackground from "../common/ModalBackground";
import ModalHeader from "../common/ModalHeader";
import CancelModalContainer from "./CancelModalContainer";

const CancelModal: FunctionComponent = () => {

  return (
    <ModalBackground>
      <ModalHeader>취소중...</ModalHeader>
      <CancelModalContainer/>
    </ModalBackground>
  );
};

export default CancelModal;


// type ArrType<T> = T[];
// const Arr: ArrType<number> = [1, 'a', 2, 3];
