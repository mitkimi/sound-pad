const state = {
  current: null
}

const mutations = {
  SET_CURRENT (state, preload) {
    state.current = preload.current
  }
}

const actions = {
  PLAY_CURRENT_ACTION ({ commit }, { current }) {
    // 设置属性
    commit('SET_CURRENT', {
      current
    })
  }
}

export default {
  state,
  mutations,
  actions
}
