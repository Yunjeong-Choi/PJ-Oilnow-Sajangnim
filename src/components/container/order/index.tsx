import { FunctionComponent } from "react";
import ContainerBody from "../common/body";
import SearchFilter from "./searchFilter";
import SearchResult from "./searchResult";

const OrderContainer: FunctionComponent = () => {
  return (
    <ContainerBody>
      <SearchFilter />
      <SearchResult />
    </ContainerBody>
  );
};

export default OrderContainer;

