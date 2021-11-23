import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Action Slices (actions, reducers)
interface State {
  modal: boolean
}

const initialState: State = {
  modal: false
}

const slice = createSlice({
  name: "ui",
  initialState,
  reducers: {

    openModal: (state, {payload}: PayloadAction) => {
      state.modal = true
    },

    closeModal: (state, {payload}: PayloadAction) => {
      state.modal = false
    },

  }
})

export const uiAction = slice.actions
export const uiReducer = slice.reducer


// Selectors
export const modal = createSelector(
  (state: any) => state.entities.ui.modal,
  (modal) => modal
)