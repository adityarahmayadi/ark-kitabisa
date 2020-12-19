import React, { lazy, Suspense } from 'react'
import { GoodsProvider } from 'goods-core'
import { kitabisaTheme } from '@kitabisa/assets/styles'
import { AppProvider } from './context/app.context'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@kitabisa/pages/home'))

const App = () => (
  <Suspense fallback=''>
    <GoodsProvider theme={kitabisaTheme}>
      <AppProvider>
        <Home />
      </AppProvider>
    </GoodsProvider>
  </Suspense>
)

export default App