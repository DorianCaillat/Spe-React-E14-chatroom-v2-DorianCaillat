import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  showForm: boolean;
  email: string;
  password: string;
};

const initialState: SettingsState = {
  showForm: false,
  email: '',
  password: '',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleForm(state) {
      state.showForm = !state.showForm;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { toggleForm, setEmail, setPassword } = settingsSlice.actions;
export default settingsSlice.reducer;
