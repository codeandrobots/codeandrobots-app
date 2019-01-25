
import Fixtures from 'App/Fixtures/Api'

export default {
  // Functions return fixtures
  setAuthToken: (userAuth) => {},
  removeAuthToken: () => {},
  login: (credentials) => {
    return Fixtures.login.response
  },
  signup: (user) => {
    return Fixtures.signup.response
  },
  deleteAccount: (userId) => {
    return Fixtures.deleteAccount.response
  }
}
