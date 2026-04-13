import {
  createSlice,
  createSelector,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface CalculatorInputs {
  price: number;
  adSpend: number;
  cpr: number;
  avgOrderValue: number;
}

interface CalculatorState {
  inputs: CalculatorInputs;
}

const initialState: CalculatorState = {
  inputs: {
    price: 150000,
    adSpend: 5000000,
    cpr: 5000,
    avgOrderValue: 200000,
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInput: (
      state,
      action: PayloadAction<{ key: keyof CalculatorInputs; value: number }>,
    ) => {
      state.inputs[action.payload.key] = action.payload.value;
    },
    resetInputs: (state) => {
      state.inputs = initialState.inputs;
    },
  },
});

export const { updateInput, resetInputs } = calculatorSlice.actions;

// Selectors
const selectInputs = (state: { calculator: CalculatorState }) =>
  state.calculator.inputs;

export const selectPrice = createSelector(
  [selectInputs],
  (inputs) => inputs.price,
);
export const selectAdSpend = createSelector(
  [selectInputs],
  (inputs) => inputs.adSpend,
);
export const selectCpr = createSelector([selectInputs], (inputs) => inputs.cpr);
export const selectAvgOrderValue = createSelector(
  [selectInputs],
  (inputs) => inputs.avgOrderValue,
);

export const selectResults = createSelector(
  [selectAdSpend, selectCpr],
  (adSpend, cpr) => (cpr > 0 ? adSpend / cpr : 0),
);

export const selectRevenue = createSelector(
  [selectResults, selectAvgOrderValue],
  (results, avgOrderValue) => results * avgOrderValue,
);

export const selectProfit = createSelector(
  [selectRevenue, selectAdSpend],
  (revenue, adSpend) => revenue - adSpend,
);

export const selectRoi = createSelector(
  [selectProfit, selectAdSpend],
  (profit, adSpend) => (adSpend > 0 ? (profit / adSpend) * 100 : 0),
);

export const selectMargin = createSelector(
  [selectAvgOrderValue, selectCpr],
  (avgOrderValue, cpr) => avgOrderValue - cpr,
);

export const selectCalculatorResult = createSelector(
  [
    selectPrice,
    selectAdSpend,
    selectCpr,
    selectAvgOrderValue,
    selectResults,
    selectRevenue,
    selectProfit,
    selectRoi,
    selectMargin,
  ],
  (
    price,
    adSpend,
    cpr,
    avgOrderValue,
    results,
    revenue,
    profit,
    roi,
    marginPerResult,
  ) => ({
    price,
    adSpend,
    cpr,
    avgOrderValue,
    results,
    revenue,
    profit,
    roi,
    marginPerResult,
  }),
);

export default calculatorSlice.reducer;
