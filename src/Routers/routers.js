import { Route, Routes } from 'react-router-dom'
import Protected from './protected'
import {
  AdminLogin,
  Categories,
  CategoriesPut,
  Projects,
  Feedback,
  FeedbackCreate,
  Vacansy
} from '../Admin/page'

function Routers() {
  return (
    <Routes>
      <Route path='/admin-login' element={<AdminLogin />} />
      <Route element={<Protected />}>
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/categories/:id' element={<CategoriesPut />} />
        <Route path='/admin/projects' element={<Projects />} />
        {/* <Route path='/admin/projects/create' element={<ProjectCreate />} /> */}
        <Route path='/admin/feedback' element={<Feedback />} />
        <Route path='/admin/feedback/create' element={<FeedbackCreate />} />
        <Route path='/admin/vacancy' element={<Vacansy />} />
      </Route>
    </Routes>
  )
}

export default Routers