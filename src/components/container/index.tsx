import ContainerHeader from "./common/head";
import OrderContainer from "./order/index";

const Container = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <OrderContainer />
    </>
  );
};

export default Container;
