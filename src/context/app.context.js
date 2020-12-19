import React, { createContext, useMemo, useReducer, useContext } from 'react'
import { sortBy } from '@kitabisa/utils/helpers'
import produce from 'immer'
import isEqual from 'react-fast-compare'

const initialState = {
  masterData: null,
  campaigns: null,
  sortActive: 'order'
}

const AppStateContext = createContext(initialState)
const AppDispatchContext = createContext()

const reducer = produce((state, action ) => {
  const { type, payload = {} } = action
  switch(type){
    case 'SET_CAMPAIGNS': 
    if(!isEqual(state.campaigns, payload.campaigns)){
      const data = sortBy(payload.campaigns, initialState.sortActive)
      state.masterData = data
      state.campaigns = data
    }
    return
    case 'SORT_BY': 
    if(!isEqual(state.sortActive, payload.sortActive)){
      const data = sortBy(state.masterData, payload.sortActive)
      state.campaigns = data
      state.sortActive = payload.sortActive
    }
    return
    default:
      throw new Error('Unknown action type')
  }
})

const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => [state, dispatch])
  return contextValue
}

export const useAppContext = () => {
  const state = useContext(AppStateContext)
  const dispatch = useContext(AppDispatchContext)
  return [state, dispatch]
}

export const AppProvider = ({children}) => {
  const [state, dispatch] = useApp()
  return(
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}