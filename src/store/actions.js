import types from "./mutation-types"

export const addUser = function ({
  commit
}) {
  commit(types.ADDUSER)
}
