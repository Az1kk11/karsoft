import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CategoriesServices from '../../../Redux/services/category'
import { categoriesFailure, categoriesStart, categoriesSuccess, postCategorieStart, postCategorieSuccess } from '../../../Redux/slice/categorieSlice'

import { toast } from 'react-toastify'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'

import '../../css/categories.css'

function Categories() {
  const { categories, isLoading } = useSelector(state => state.categorie)
  const [title, setTitle] = useState()
  const [description, setDescripton] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getCategories = async () => {
    dispatch(categoriesStart())
    try {
      const response = await CategoriesServices.categoriesData()
      dispatch(categoriesSuccess(response.data))
    } catch (error) {
      dispatch(categoriesFailure(error))
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    getCategories()
    const categories = new FormData()
    categories.set('title', title)
    categories.set('descripton', description)

    dispatch(postCategorieStart())
    try {
      await CategoriesServices.categoriesPost(categories)
      dispatch(postCategorieSuccess())
      getCategories()
      toast.success('Categorie succesfuly created')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const deleteProduct = async id => {
    dispatch(categoriesStart())
    try {
      await CategoriesServices.categoriesDelete(id)
      getCategories()
      dispatch(categoriesSuccess())
      toast.success('Categorie succesfuly deleted')
    } catch (error) {
      dispatch(categoriesFailure())
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className='categorie'>
      <Container>
        <div className="add-categorie">
          <Row>
            <h3 className='text-light'>Categorie Create</h3>
            <Col lg={12}>
              <Form onSubmit={handleSubmit}>
                <FormGroup className='mt-4'>
                  <Label className='text-light'>Categories name</Label>
                  <Input
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Label className='text-light'>Description</Label>
                  <Input
                    className='mt-3'
                    placeholder='Description'
                    value={description}
                    onChange={e => setDescripton(e.target.value)}
                  />
                </FormGroup>
                <Button className='mt-3' type='submit'>
                  {isLoading ? 'Loading...' : 'Create'}
                </Button>
              </Form>
            </Col>
            <h3 className='text-light mt-3 mb-3'>All Categories</h3>
            <Col lg={12} className='table-categorie'>
              <Table
                size="sm"
                striped
              >
                <thead className='text-light'>
                  <tr>
                    <th>ID</th>
                    <th>Category name</th>
                    <th>Action</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map(item => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td className='text-capitalize'>{item.title}</td>
                      <td>
                        <Button
                          color='danger'
                          onClick={() => deleteProduct(item.id)}
                        >
                          {isLoading ? 'Deleting...' : 'Delete'}
                        </Button>
                      </td>
                      <td
                        className='category-item'
                        onClick={() => navigate(`/admin/categories/${item.id}`)}
                      >
                        <i className="ri-file-edit-line"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Categories