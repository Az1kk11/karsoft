import { useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Layouts from './Admin/Layots/layouts'

function App() {
  const location = useLocation()
  return (
    <>
      { location.pathname.startsWith('/admin') ? <Layouts/> : <Layout /> }
    </>
  )
}

export default App