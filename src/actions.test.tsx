import { UPDATE_ERROR_MODAL, updateErrorModalStatus } from "./actions";
import { ErrorModalProps } from "./state";

describe("actions", () => {
  it("should create an action to update error modal status", () => {
    const errorModal: ErrorModalProps = {
      isOpen: false
    };
    const expectedAction = {
      type: UPDATE_ERROR_MODAL,
      payload: errorModal
    };

    expect(updateErrorModalStatus(errorModal)).toEqual(expectedAction);
  });
});
