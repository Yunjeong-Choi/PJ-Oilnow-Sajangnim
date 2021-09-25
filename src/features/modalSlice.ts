import { createSlice } from "@reduxjs/toolkit";

export interface CancelModalData {
  index: number;
  date: string;
  money: number;
  name: string;
}

interface ModalState {
  isOpen: boolean;
  cancelModalData?: CancelModalData;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, { type, payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true;
      state.cancelModalData = payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.cancelModalData = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
