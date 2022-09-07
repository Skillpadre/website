import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface SecretState {
    value: boolean
  }
  
  const initialState: SecretState = {
    value: false,
  }

  export const secretSlice = createSlice({
    name: 'SecretSmoke',
    initialState,
    reducers: {
      displaySecret: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = true
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { displaySecret } = secretSlice.actions
  
  export default secretSlice.reducer