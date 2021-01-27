const state = {
  mode: 'performing',
  isModifying: null
}

const mutations = {
  SET_MODE (state, preload) {
    state.mode = preload.mode
  },
  SET_MODIFYING (state, preload) {
    state.isModifying = preload.isModifying
  }
}

const actions = {
  SELECT_MODE_ACTION ({ commit }, { mode }) {
    // 设置属性
    commit('SET_MODE', {
      mode
    })
  },
  SET_MODIFYING_ACTION ({ commit }, { isModifying }) {
    // 设置属性
    commit('SET_MODIFYING', {
      isModifying
    })
  }
}

export default {
  state,
  mutations,
  actions
}
