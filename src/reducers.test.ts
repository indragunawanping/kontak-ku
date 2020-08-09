import { communicationReducer, controlReducer, dataReducer, sessionReducer } from "./reducers";
import { Contact, HttpCallMethod, HttpCallStatus } from "./state";
import { UPDATE_ERROR_MODAL } from "./actions";
import {
  UPDATE_CONTACT_LIST,
  UPDATE_CURRENT_CONTACT, UPDATE_DELETING_CONTACT_STATUS, UPDATE_FETCHING_CONTACT_DETAIL_STATUS,
  UPDATE_FETCHING_CONTACT_STATUS,
  UPDATE_STORING_CONTACT_STATUS, UPDATE_UPDATING_CONTACT_STATUS
} from "./actionsContact";
import { initialCommunicationState, initialControlState, initialDataState, initialSessionState } from "./initialStates";
import { ADD_NEW_HTTP_CALL, UPDATE_HTTP_CALL_STATUS } from "./actionsHttp";
import { dummyContact, dummyContacts } from "./master-data/dummyData";

describe("data reducer", () => {
  it("should return the initial state", () => {
    expect(dataReducer(undefined, {})).toEqual(
      {
        contacts: []
      }
    );
  });

  it("should handle UPDATE_CONTACT_LIST", () => {
    expect(
      dataReducer(initialDataState, {
        type: UPDATE_CONTACT_LIST,
        payload: dummyContacts
      })
    ).toEqual(
      {
        ...initialDataState,
        contacts: dummyContacts
      }
    );
  });
});

describe("control reducer", () => {
  it("should return the initial state", () => {
    expect(controlReducer(undefined, {})).toEqual(
      {
        currentContact: {
          id: "",
          firstName: "",
          lastName: "",
          age: 0,
          photo: ""
        },
        errorModal: {
          isOpen: false
        },
        successfulModal: {
          isOpen: false,
          title: "",
          content: ""
        }
      }
    );
  });

  it("should handle UPDATE_ERROR_MODAL", () => {
    const errorModalPayload = {
      isOpen: false,
      title: 'Unable to retrieve contact',
      content: 'Please contact your developer.'
    };

    expect(
      controlReducer(initialControlState, {
        type: UPDATE_ERROR_MODAL,
        payload: errorModalPayload
      })
    ).toEqual(
      {
        ...initialControlState,
        errorModal: errorModalPayload
      }
    );
  });

  it("should handle UPDATE_CONTACT", () => {
    const currentContact: Contact = dummyContact;

    expect(
      controlReducer(initialControlState, {
        type: UPDATE_CURRENT_CONTACT,
        payload: currentContact
      })
    ).toEqual(
      {
        ...initialControlState,
        currentContact: currentContact
      }
    );
  });
});

describe("session reducer", () => {
  it("should return the initial state", () => {
    expect(sessionReducer(undefined, {})).toEqual(
      {
        isFetchingContact: false,
        isStoringContact: false,
        isUpdatingContact: false,
        isDeletingContact: false,
        isFetchingContactDetail: false
      }
    );
  });

  it("should handle UPDATE_FETCHING_CONTACT_STATUS", () => {
    expect(
      sessionReducer(initialSessionState, {
        type: UPDATE_FETCHING_CONTACT_STATUS,
        payload: true
      })
    ).toEqual(
      {
        ...initialSessionState,
        isFetchingContact: true
      }
    );
  });

  it("should handle UPDATE_STORING_CONTACT_STATUS", () => {
    expect(
      sessionReducer(initialSessionState, {
        type: UPDATE_STORING_CONTACT_STATUS,
        payload: true
      })
    ).toEqual(
      {
        ...initialSessionState,
        isStoringContact: true
      }
    );
  });

  it("should handle UPDATE_FETCHING_CONTACT_DETAIL_STATUS", () => {
    expect(
      sessionReducer(initialSessionState, {
        type: UPDATE_FETCHING_CONTACT_DETAIL_STATUS,
        payload: true
      })
    ).toEqual(
      {
        ...initialSessionState,
        isFetchingContactDetail: true
      }
    );
  });

  it("should handle UPDATE_UPDATING_CONTACT_STATUS", () => {
    expect(
      sessionReducer(initialSessionState, {
        type: UPDATE_UPDATING_CONTACT_STATUS,
        payload: true
      })
    ).toEqual(
      {
        ...initialSessionState,
        isUpdatingContact: true
      }
    );
  });
  //
  it("should handle UPDATE_DELETING_CONTACT_STATUS", () => {
    expect(
      sessionReducer(initialSessionState, {
        type: UPDATE_DELETING_CONTACT_STATUS,
        payload: true
      })
    ).toEqual(
      {
        ...initialSessionState,
        isDeletingContact: true
      }
    );
  });
});

describe("communication reducer", () => {
  it("should return the initial state", () => {
    expect(communicationReducer(undefined, {})).toEqual(
      {
        httpCalls: []
      }
    );
  });

  it("should handle ADD_NEW_HTTP_CALL", () => {
    const newHttpPayload = {
      id: "12345",
      method: HttpCallMethod.GET,
      url: "http://test.agile.com",
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: "request body",
      status: HttpCallStatus.SENT
    };
    const newHttpPayload2 = {
      id: "12346",
      method: HttpCallMethod.GET,
      url: "http://test.agile.com",
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: "request body",
      status: HttpCallStatus.SENT
    };

    expect(
      communicationReducer(initialCommunicationState, {
        type: ADD_NEW_HTTP_CALL,
        payload: newHttpPayload
      })
    ).toEqual(
      {
        httpCalls: [newHttpPayload]
      }
    );

    expect(
      communicationReducer(
        {
          httpCalls: [newHttpPayload]
        },
        {
          type: ADD_NEW_HTTP_CALL,
          payload: newHttpPayload2
        }
      )
    ).toEqual(
      {
        httpCalls: [
          newHttpPayload,
          newHttpPayload2
        ]
      }
    );
  });

  it("should handle UPDATE_HTTP_CALL_STATUS", () => {
    const newHttpPayload = {
      id: "12345",
      method: HttpCallMethod.GET,
      url: "http://test.agile.com",
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: "request body",
      status: HttpCallStatus.SENT
    };
    const newHttpPayload2 = {
      id: "12346",
      method: HttpCallMethod.GET,
      url: "http://test.agile.com",
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: "request body",
      status: HttpCallStatus.SENT
    };

    expect(
      communicationReducer(
        {
          httpCalls: [newHttpPayload, newHttpPayload2]
        },
        {
          type: UPDATE_HTTP_CALL_STATUS,
          payload: {
            callId: "12345",
            status: HttpCallStatus.SUCCESSFUL
          }
        }
      )
    ).toEqual(
      {
        httpCalls: [
          {
            id: "12345",
            method: HttpCallMethod.GET,
            url: "http://test.agile.com",
            headers: {
              "Content-Type": "application/json"
            },
            requestBody: "request body",
            status: HttpCallStatus.SUCCESSFUL
          },
          newHttpPayload2
        ]
      }
    );

    expect(
      communicationReducer(
        {
          httpCalls: [newHttpPayload, newHttpPayload2]
        },
        {
          type: UPDATE_HTTP_CALL_STATUS,
          payload: {
            callId: "12346",
            status: HttpCallStatus.ERROR
          }
        }
      )
    ).toEqual(
      {
        httpCalls: [
          newHttpPayload,
          {
            id: "12346",
            method: HttpCallMethod.GET,
            url: "http://test.agile.com",
            headers: {
              "Content-Type": "application/json"
            },
            requestBody: "request body",
            status: HttpCallStatus.ERROR
          }
        ]
      }
    );

    expect(
      communicationReducer(
        {
          httpCalls: [newHttpPayload, newHttpPayload2]
        },
        {
          type: UPDATE_HTTP_CALL_STATUS,
          payload: {
            callId: "11111",
            status: HttpCallStatus.ERROR
          }
        }
      )
    ).toEqual(
      {
        httpCalls: [
          newHttpPayload,
          newHttpPayload2
        ]
      }
    );
  });
});
