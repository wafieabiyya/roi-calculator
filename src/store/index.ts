import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/calculator/calculator.slice";
import historyReducer from "../features/history/history.slice";
import { loadHistory, saveHistory } from "../features/history/history.storage";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    history: historyReducer,
  },
  preloadedState: {
    history: {
      savedCalculations: loadHistory(),
    },
  },
});

let prevHistory: unknown = null;

store.subscribe(() => {
  const state = store.getState();
  const currentHistory = state.history.savedCalculations;

  if (prevHistory !== currentHistory) {
    prevHistory = currentHistory;
    saveHistory(currentHistory);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
