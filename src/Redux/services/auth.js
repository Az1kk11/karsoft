import axios from "./api";

const AuthServices = {
    async adminLogin(user) {
        const { data } = await axios.post('/auth/login', user)
        return data
    }
}

export default AuthServices