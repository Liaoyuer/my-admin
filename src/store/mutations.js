import types from "./mutation-types"

const matutaions = {
  [types.ADDUSER] (state, action) {
    if (action) {
      state.userInfo = action
    }
  }
}

export default matutaions
