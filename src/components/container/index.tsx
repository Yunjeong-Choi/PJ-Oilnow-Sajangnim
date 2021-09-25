import ContainerHeader from "./ContainerHeader";
import OrderContainerBody from "./order/index";

const Container = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <OrderContainerBody />
    </>
  );
};

export default Container;
