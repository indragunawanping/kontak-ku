import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LoadingComponent from "./LoadingComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadingComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders LoadingComponent correctly", () => {
  const tree = renderer.create(<LoadingComponent />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="ui active centered inline loader"
    />
  `);
});
