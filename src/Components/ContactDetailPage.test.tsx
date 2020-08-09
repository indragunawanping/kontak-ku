import React from "react";
import ReactDOM from "react-dom";
import ContactDetailPage from "./ContactDetailPage";
import { dummyContact } from "../master-data/dummyData";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ContactDetailPage
      currentContact={dummyContact}
      isFetchingContactDetail={false}
      isDeletingContact={false}
      handleButtonBackClick={jest.fn()}
      HandleButtonEditClick={jest.fn()}
      handleButtonDeleteClick={jest.fn()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
