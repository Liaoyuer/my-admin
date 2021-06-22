import types from "./mutation-types"

export const addUser = function ({
  commit
}) {
  commit(types.ADDUSER)
}
export const formData = function ({
  commit
}) {
  commit(types.FORMDATA)
}
