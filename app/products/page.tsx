'use client';
import React from 'react';
import useFetchOrdersAndProducts from "@/hooks/useFetchOrdersAndProducts";
import {Button} from "react-bootstrap";
import ProductsList from "@/components/products/ProductsList";

const Products = () => {
    const {
        orders,
        products,
        productsStatus,
        productsError } = useFetchOrdersAndProducts();
    console.log(products)
    return (
        <div className='p-5 overflow-x-auto'>
            <div className='d-flex align-items-center justify-content-start '>
                <Button size="lg" className="rounded-circle me-3" variant="success">+</Button>
                <h3> Продукты / {products.length} </h3>
            </div>
            {productsStatus === 'loading' && <p>Loading...</p>}
            {productsStatus === 'failed' && <p>Error: {productsError}</p>}
            {productsStatus === 'succeeded' && <ProductsList products={products} orders={orders}/>}
        </div>
    );
};

export default Products;