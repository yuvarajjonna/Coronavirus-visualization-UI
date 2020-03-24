const state = {
  userDetails: {},
  rowData: {},
  isloader: true
}

const getters = {
  getUserDetails: state => state.userDetails,
  getRowData: state => state.rowData,
  getIsLoader: state => state.isloader
}

const actions = {
  setUserDetails ({ commit }, data) {
    commit('SET_USER_DETAILS', data)
  },
  setIsLoader ({ commit }, data) {
    commit('SET_ISLOADER', data)
  }
}

const mutations = {
  SET_USER_DETAILS (state, data) {
    state.userDetails = data
  },
  SET_ISLOADER (state, data) {
    state.isloader = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
