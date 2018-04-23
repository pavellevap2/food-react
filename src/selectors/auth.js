export const getUserName = state => state.auth.userName

export const getUserData = state => state.auth.userData

export const getUserEmail = state => state.auth.userEmail

export const getUserPassword = state => state.auth.userPassword

export const getAuthError = state => {
  const error = state.auth.authError
  if (error.length) {
    return `${error.slice(0, 1)}${error
      .slice(1)
      .toLowerCase()
      .replace(/_/i, ' ')}`
  } else {
    return error
  }
}

export const getUserTokenId = state => state.auth.userTokenId
