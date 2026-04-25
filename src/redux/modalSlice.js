// store/slices/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isContactModalOpen: false },
    reducers: {
        openContactModal: (state) => { state.isContactModalOpen = true; },
        closeContactModal: (state) => { state.isContactModalOpen = false; },
    },
});

export const { openContactModal, closeContactModal } = modalSlice.actions;
export default modalSlice.reducer;