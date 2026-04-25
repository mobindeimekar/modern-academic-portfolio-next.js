import { configureStore } from '@reduxjs/toolkit'

import sidebarSlice from './sidebarSlice.js'
import modalSlice from './modalSlice.js'

const store = configureStore({
  reducer: {
    sidebarExistance: sidebarSlice , 
    modalExistance: modalSlice , 

  },
})

export default store