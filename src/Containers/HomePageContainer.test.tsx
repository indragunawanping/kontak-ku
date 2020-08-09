import React from "react";
import ReactDOM from "react-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePageContainer from "./HomePageContainer";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HomePageContainer/>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
