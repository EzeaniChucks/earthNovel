import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isModalOpen: false,
    isAuthModalOpen: false,
    isReadBookModalOpen: false,
    isChapter: false,
    isSettings: false,
    isComments: false,
    isFAQ: false,
    classToggle: '',
    logoutModal: false,
    deleteBookModal: false,
    collapseTags: 30,
    isActive: null,
    isNavigateAnchor: null,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        loadChapter: (state) => {
            state.isChapter = true;
        },
        loadSettings: (state) => {
            state.isSettings = true;
        },
        loadComments: (state) => {
            state.isComments = true;
        },
        loadFAQ: (state) => {
            state.isFAQ = true;
        },
        defaultState: (state) => {
            state.isModalOpen = false;
            state.isChapter = false;
            state.isSettings = false;
            state.isComments = false;
            state.isFAQ = false;
            state.classToggle = ''
        },
        setClassToggle: (state, { payload }) => {
            if (payload === 'overview') {
                state.classToggle = 'overview';
            }
            if (payload === 'library') {
                state.classToggle = 'library';
            }
            if (payload === 'payment') {
                state.classToggle = 'payment';
            }
            if (payload === 'profile') {
                state.classToggle = 'profile';
            }
            if (payload === 'my-stories') {
                state.classToggle = 'my-stories';
            }
            if (payload === 'messages') {
                state.classToggle = 'messages';
            }
        },
        setIsActive: (state, action) => {
            state.isActive = action.payload
        },
        setIsAuthModalOpen: (state) => {
            state.isAuthModalOpen = !state.isAuthModalOpen;
        },
        setIsReadBookModalOpen: (state) => {
            state.isReadBookModalOpen = !state.isReadBookModalOpen;
        },
        setIsNavigateAnchor: (state, { payload }) => {
            if (payload === 'dashboard') {
                state.isNavigateAnchor = 'dashboard';
            }
            if (payload === 'explore') {
                state.isNavigateAnchor = 'explore';
            }
            if (payload === 'writer-profile') {
                state.isNavigateAnchor = 'writer-profile';
            }
            if (payload === null) {
                state.isNavigateAnchor = '';
            }
        },
        setDeleteBookModal: (state) => {
            state.deleteBookModal = !state.deleteBookModal
        },
        setCollapseTags: (state, { payload }) => {
            state.collapseTags = payload
        },
        setLogoutModal: (state) => {
            state.logoutModal = !state.logoutModal
        }
    }
})

export default modalSlice.reducer;

export const {
    openModal,
    closeModal,
    loadChapter,
    loadSettings,
    loadComments,
    loadFAQ,
    defaultState,
    setIsActive,
    setIsAuthModalOpen,
    classToggle,
    setClassToggle,
    setIsReadBookModalOpen,
    setIsNavigateAnchor,
    setCollapseTags,
    setLogoutModal,
    setDeleteBookModal
} = modalSlice.actions;