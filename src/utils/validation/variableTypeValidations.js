/**
 * @desc: validates array
 * @params: (arr: [] or null or undefined)
 * @returns: boolean :: true -> valid; false -> invalid
 * **/
export const isValidArray = (arr) => {
    if (!arr) return false // if null or undefined
    if (arr.length === 0) return false // if empty
    return true // if valid
  }