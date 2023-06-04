import { Button } from 'reactstrap'
import logo from '../../assets/imags/karsoft.png'
import '../css/adminLogin.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { siginAdminStart, siginAdminSuccess, signAdminFailure } from '../../Redux/slice/authSlice'
import AuthServices from '../../Redux/services/auth'

function AdminLogin() {
  const { isLoading, logedIn } = useSelector(state => state.auth)
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = async e => {
    e.preventDefault()
    dispatch(siginAdminStart())
    const user = { phone, password }
    try {
      const response = await AuthServices.adminLogin(user)
      dispatch(siginAdminSuccess(response.data))
      console.log(response.data);
      toast.success('You have successfully logged in')
    } catch (error) {
      dispatch(signAdminFailure())
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if (logedIn) {
      navigate('/admin')
    }
  }, [logedIn])


  return (
    <section className='admin-login'>
      <img src={logo} alt="" />
      <form>
        <h3>Admin</h3>
        <div className="input-box">
          <input
            type='text'
            placeholder='Phone'
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button
          color="success"
          className='btn mt-3'
          type='submit'
          onClick={loginHandler}
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'Login'}
        </Button>
      </form>
    </section>
  )
}

export default AdminLogin