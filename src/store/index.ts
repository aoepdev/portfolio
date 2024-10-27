import { createSlice, configureStore } from "@reduxjs/toolkit";

export type UiState = {
  isDark: boolean;
  mobileMenuIsOpen: boolean;
};

const initialTheme = localStorage.getItem("theme") === "dark";

if (initialTheme) {
  document.documentElement.classList.add("dark");
}

const initialState: UiState = {
  isDark: initialTheme,
  mobileMenuIsOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDark = !state.isDark;

      const newTheme = state.isDark ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      document.documentElement.classList.toggle("dark", state.isDark);
    },
    toggleMenu(state) {
      state.mobileMenuIsOpen = !state.mobileMenuIsOpen;
    },
  },
});

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
export const uiActions = uiSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
// export type UiDispatch = typeof store.dispatch;
