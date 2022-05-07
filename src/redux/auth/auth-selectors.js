const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserMail = state => state.auth.user.email;
const getIsLoadingCurrentUser = state => state.auth.isLoadingCurrentUser

const authSelectors = {
    getIsLoggedIn,
    getUserMail,
    getIsLoadingCurrentUser
}

export default authSelectors;