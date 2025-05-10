import React, { useState } from 'react'
import { GifGrid, AddCategory } from './components';

function GifExpertApp() {

  const [categories, setCategories] = useState(['Dragon Ball Z'])

  const onAddCategory = (newCategory) => {
    console.log('fn onAddCategory');
    console.log(newCategory);

    if (categories.includes(newCategory)) return;

    setCategories((prev) => [newCategory, ...prev])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  )
}

export default GifExpertApp