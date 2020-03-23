const state = {
  userDetails: {},
  rowData: {}
}

const getters = {
  getUserDetails: state => state.userDetails,
  getRowData: state => state.rowData
}

const actions = {
  setUserDetails ({ commit }, data) {
    commit('SET_USER_DETAILS', data)
  },
  setRowData ({ commit }, data) {
    commit('SET_ROWDATA', data)
  }
}

const mutations = {
  SET_USER_DETAILS (state, data) {
    state.userDetails = data
  },
  SET_ROWDATA (state, data) {
    state.rowData = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
