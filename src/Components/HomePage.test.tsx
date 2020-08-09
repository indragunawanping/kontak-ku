import React from "react";
import ReactDOM from "react-dom";
import { dummyContacts } from "../master-data/dummyData";
import renderer from "react-test-renderer";
import HomePage from "./HomePage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HomePage
      contacts={dummyContacts}
      isFetchingContact={false}
      handleContactClick={jest.fn()}
      handleAddButtonClick={jest.fn()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders HomePage correctly", () => {
  const tree = renderer
    .create(
      <HomePage
        contacts={dummyContacts}
        isFetchingContact={false}
        handleContactClick={jest.fn()}
        handleAddButtonClick={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="ContactContainer"
    >
      <img
        className="ui image Logo"
        src="kontak-ku-logo.webp"
      />
      <div
        className="ui big divided selection middle aligned list ContactList"
        role="list"
      >
        <div
          className="item"
          onClick={[Function]}
          role="listitem"
        >
          <img
            className="ui avatar image"
            src="https://via.placeholder.com/150"
          />
          <div
            className="content Name"
          >
            <div
              className="header"
            >
              Budi
               
              Setianto
            </div>
          </div>
        </div>
        <div
          className="item"
          onClick={[Function]}
          role="listitem"
        >
          <img
            className="ui avatar image"
            src="https://via.placeholder.com/300/09f/fff.png"
          />
          <div
            className="content Name"
          >
            <div
              className="header"
            >
              Andi
               
              Setiawan
            </div>
          </div>
        </div>
      </div>
      <button
        className="ui violet big circular icon button Float"
        onClick={[Function]}
      >
        <i
          aria-hidden="true"
          className="add user icon"
          onClick={[Function]}
        />
      </button>
    </div>
  `);
});
