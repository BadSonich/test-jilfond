import { loadSearchResult } from '../../api'

const state = {
    searchValue: "",
    searchResult: [],
    selectedUser: {},
    showLoader: false,
}

const mutations = {
    'SET_SEARCH_VALUE'(state, searchValue) {
        state.searchValue = searchValue;
    },
    'SET_SEARCH_RESULT'(state, searchResult) {
        state.searchResult = searchResult;
    },
    'SET_SELECTED_USER'(state, selectedUser) {
        state.selectedUser = selectedUser;
    },
    'SET_SHOW_LOADER'(state, showLoader) {
        state.showLoader = showLoader;
    }
}

const actions = {
    getResult: async ({commit}) => {
        commit('SET_SHOW_LOADER', true);
        commit('SET_SEARCH_RESULT', await loadSearchResult(state.searchValue));
        commit('SET_SHOW_LOADER', false);
    }
}

const getters = {
    searchValue: state => state.searchValue,
    searchResult: state => state.searchResult,
    selectedUser: state => state.selectedUser,
    showLoader: state => state.showLoader,
}

export default {
    state,
    mutations,
    actions,
    getters
}
