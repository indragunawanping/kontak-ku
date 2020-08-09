import UpdateContactModal from "./UpdateContactModal";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <UpdateContactModal
      updateContactModalOpen={false}
      updateActionType='Add'
      firstName='Budi'
      lastName='Setiawan'
      age={2}
      photoUrl='https://via.placeholder.com/150'
      errorMessage='Cannot Add Contact.'
      isUpdatingContact={false}
      handleFirstNameChange={jest.fn()}
      handleLastNameChange={jest.fn()}
      handleAgeChange={jest.fn()}
      handlePhotoUrlChange={jest.fn()}
      handleCancelButtonClick={jest.fn()}
      handleUpdateContactButtonClick={jest.fn()}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
