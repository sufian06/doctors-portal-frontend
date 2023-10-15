import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SidebarState {
  open: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebarDrawer: (state) => {
      state.open = true;
    },
    onSidebarClose: (state) => {
      state.open = false;
    },
  },
});

export const { showSidebarDrawer, onSidebarClose } = sidebarSlice.actions;

export default sidebarSlice.reducer;
