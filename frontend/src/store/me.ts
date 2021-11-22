import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Mutation, LoginInputDto, LoginDocument, RefreshTokenDocument, LogoutDocument } from "../utils/generated";
import { apiCall } from "./api";


// Action Slices (actions, reducers)
interface State {
  info: {
    id: string,
    email: string
  }
}

const initialState: State = {
  info: {
    id: "",
    email: "",
  }
}

const slice = createSlice({
  name: "me",
  initialState,
  reducers: {

    populate_info: (state, {payload}: PayloadAction<AxiosResponse<Mutation>>) => {
      const {id, email} = payload.data?.login.user
      state.info.id = id
      state.info.email = email
    },

    clear_info: (state, {payload}: PayloadAction<AxiosResponse<Mutation>>) => {
      state.info.id = ""
      state.info.email = ""
    },

  }
})

export const meAction = slice.actions
export const meReducer = slice.reducer




// Selectors
export const meInfo = createSelector(
  (state: any) => state.entities.me.info,
  (info) => info
)




// Action Creators
export const login = (args: LoginInputDto) => {
  return apiCall({
    gqlDocument: LoginDocument,
    variables: args,
    reducerToCallOnSuccess: meAction.populate_info.type,
  });
}

export const logout = () => {
  return apiCall({
    gqlDocument: LogoutDocument,
    reducerToCallOnSuccess: meAction.clear_info.type,
  });
}

export const requestRefreshToken = () => {
  return apiCall({
    gqlDocument: RefreshTokenDocument,
  });
}
