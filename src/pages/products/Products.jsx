import React, { useState } from 'react'
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable"
import { products, productsColumns } from '../../data'
import Add from '../../components/add/Add'

const Products = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='products'>
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug="products" rows={products} columns={productsColumns} />
            {open && <Add slug="product" columns={productsColumns} setOpen={setOpen} />}
        </div>
    )
}

export default Products