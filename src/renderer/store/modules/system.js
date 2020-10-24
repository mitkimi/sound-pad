const state = {
  mode: 'performing'
}

const mutations = {
  SET_MODE (state, preload) {
    state.mode = preload.mode
  }
}

const actions = {
  SELECT_MODE_ACTION ({ commit }, { mode }) {
    // 设置属性
    commit('SET_MODE', {
      mode
    })
  }
}

export default {
  state,
  mutations,
  actions
}
