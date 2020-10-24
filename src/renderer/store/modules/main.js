const state = {
  activeListItem: 0 // 当前节目
}

const mutations = {
  SET_ACTIVE (state, preload) {
    state.activeListItem = preload.listItemId
  }
}

const actions = {
  SELECT_LIST_ITEM ({ commit }, { listItemId }) {
    // 设置属性
    commit('SET_ACTIVE', {
      listItemId
    })
  }
}

export default {
  state,
  mutations,
  actions
}
