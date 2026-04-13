import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SavedCalculation {
  id: string;
  timestamp: string;
  roi: number;
  profit: number;
}

interface HistoryState {
  savedCalculations: SavedCalculation[];
}

const initialState: HistoryState = {
  savedCalculations: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addCalculation: (
      state,
      action: PayloadAction<Omit<SavedCalculation, "id" | "timestamp">>,
    ) => {
      const newCalc: SavedCalculation = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
      };

      state.savedCalculations.unshift(newCalc);
    },

    removeCalculation: (state, action: PayloadAction<string>) => {
      state.savedCalculations = state.savedCalculations.filter(
        (c) => c.id !== action.payload,
      );
    },

    clearHistory: (state) => {
      state.savedCalculations = [];
    },
  },
});

export const { addCalculation, removeCalculation, clearHistory } =
  historySlice.actions;

export const selectHistory = (state: { history: HistoryState }) =>
  state.history.savedCalculations;

export default historySlice.reducer;
