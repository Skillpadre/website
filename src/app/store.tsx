import { configureStore } from '@reduxjs/toolkit'
import BackButtonReducer from './reducers/BackButtonReducer'
import DarkModeReducer from './reducers/DarkModeReducer'
import SecretSmokeReducer from './reducers/SecretSmokeReducer'

export const store = configureStore({
  reducer: {
    backButton: BackButtonReducer,
    darkMode: DarkModeReducer,
    secretSmoke: SecretSmokeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch