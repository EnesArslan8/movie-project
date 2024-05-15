import Link from 'next/link';
import './categories.css'
import React from 'react'

const Categories = ({categories}) => {
    return (
        <div className="categories">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="category"
              href={`/${category.id}`}
            >
              <div >{category.name}</div>
            </Link>
          ))}
        </div>
      );
}

export  {Categories}