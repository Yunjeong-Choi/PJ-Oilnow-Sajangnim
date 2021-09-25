import { FunctionComponent } from "react";
import SearchFilter from "./searchFilter";
import SearchResult from "./searchResult";

const OrderContainerBody: FunctionComponent = () => {
  return (
    <div className="container-body">
      <SearchFilter />
      <SearchResult />
    </div>
  );
};

export default OrderContainerBody;

//TODO: 왜 컨테이너 바디의 배경색이 안보일까