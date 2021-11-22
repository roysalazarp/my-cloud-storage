import axios from "axios";
import { apiCall } from "../api";
import { print } from "graphql";
import { ApiCallPayload } from "../api";
import { Dispatch, Action } from "@reduxjs/toolkit";

export interface ApiAction extends Action<string> {
  payload: ApiCallPayload
}

export const api = ({dispatch}: {dispatch: Dispatch}) => (next: Function) => async (action: ApiAction) => {
  if (action.type !== apiCall.type) {
    return next(action)
  }

  next(action)

  const { reducerToCallOnSuccess, reducerToCallOnError } = action.payload
  const { gqlDocument, variables } = action.payload

  try {
    const response = await axios.post(
      "http://localhost:3001/graphql",
      {
        query: print(gqlDocument),
        variables: {
          args: {...variables}
        }
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    );
    if (reducerToCallOnSuccess) dispatch({ type: reducerToCallOnSuccess, payload: response.data });
  } catch (error) {
    if (reducerToCallOnError) dispatch({ type: reducerToCallOnError, payload: (error as Error).message });
  }
}