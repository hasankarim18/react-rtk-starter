import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCounterState = {
  count: number;
};

// type TChange = {
//   type: string;
//   payload?: number;
// };

type TIncrementByAmountPayload = {
  value: number;
};

// type TAction = TChangeByAmount;

const initialState: TCounterState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByInput: (
      state,
      action: PayloadAction<TIncrementByAmountPayload>
    ) => {
      state.count = state.count + action.payload.value;
    },
    decrementByInput: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByInput, decrementByInput } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
