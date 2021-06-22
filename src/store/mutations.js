import types from "./mutation-types"

const matutaions = {
  [types.ADDUSER] (state, action) {
    if (action) {
      state.userInfo = action
    }
  },
  [types.FORMDATA] (state, action) {
    if (action) {
      state.formData = action
    }
  }
}

export default matutaions
