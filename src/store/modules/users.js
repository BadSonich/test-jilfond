import { loadSearchResult } from '../../api'

const state = {
    searchValue: "",
    searchResult: [],
    selectedUser: {},
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
    }
}

const actions = {
    getResult: async ({commit}) => {
        commit('SET_SEARCH_RESULT', await loadSearchResult(state.searchValue));
    }
}

const getters = {
    searchValue: state => state.searchValue,
    searchResult: state => state.searchResult,
    selectedUser: state => state.selectedUser,
}

export default {
    state,
    mutations,
    actions,
    getters
}
