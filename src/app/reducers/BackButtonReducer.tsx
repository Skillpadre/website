import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface BackState {
    value: boolean
  }
  
  const initialState: BackState = {
    value: false,
  }

  export const backSlice = createSlice({
    name: 'backButton',
    initialState,
    reducers: {
      enableBackButton: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = true
      },
      disableBackButton: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = false
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { enableBackButton, disableBackButton } = backSlice.actions
  
  export default backSlice.reducer