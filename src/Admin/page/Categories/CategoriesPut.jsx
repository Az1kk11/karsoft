import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Form, Input, Label } from 'reactstrap'
import '../../css/categories.css'
import { useSelector } from 'react-redux'

function CategoriesPut() {
  const { categories, isLoading } = useSelector(state => state.categorie)
  const { id } = useParams()
  
  return (
    <section className='category-put'>
      <Container>
        <div className="category-content-box">
          <h3 className='text-light mb-4'>Categories Put</h3>
          <Form>
            <Label className='text-light'>Categories name</Label>
            <Input
              placeholder='Title'
            // value={title}
            // onChange={e => setTitle(e.target.value)}
            />
            <Label className='text-light mt-3'>Description</Label>
            <Input
              placeholder='Description'
            // value={categories}
            // onChange={e => setDescripton(e.target.value)}
            />
          </Form>
        </div>
      </Container>
    </section>
  )
}

export default CategoriesPut