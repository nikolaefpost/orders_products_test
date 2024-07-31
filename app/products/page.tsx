'use client';
import React, { useEffect, useState } from 'react';
import useFetchOrdersAndProducts from "@/hooks/useFetchOrdersAndProducts";
import { Button } from "react-bootstrap";
import ProductsList from "@/components/products/ProductsList";
import Form from 'react-bootstrap/Form';
import { getSpecificationProduct, getTypeProduct } from "@/helpers";
import { IProduct } from "@/types";
import { motion, AnimatePresence } from 'framer-motion';

const Products = () => {
    const [localProducts, setLocalProducts] = useState<IProduct[]>([]);
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedSpecification, setSelectedSpecification] = useState<string>('');
    const [animatedKey, setAnimatedKey] = useState<number>(1);
    const {
        orders,
        products,
        productsStatus,
        productsError
    } = useFetchOrdersAndProducts();

    const productsType = getTypeProduct(products);
    const productsSpecification = getSpecificationProduct(products);

    useEffect(() => {
        filterProducts();
    }, [products, selectedType, selectedSpecification]);

    const filterProducts = () => {
        let filteredProducts = products;


        if (selectedType) {
            filteredProducts = filteredProducts.filter(product => product.type === selectedType);
        }

        if (selectedSpecification) {
            filteredProducts = filteredProducts.filter(product => product.specification === selectedSpecification);
        }
        setAnimatedKey(prev=>prev === 1 ? 0: 1)
        setLocalProducts(filteredProducts);
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const handleSpecificationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpecification(event.target.value);
    };

    return (
        <div className='p-5 overflow-x-auto'>
            <div className='d-flex align-items-center justify-content-start '>
                <Button size="lg" className="rounded-circle me-3" variant="success">+</Button>
                <h3> Продукты / {localProducts.length} </h3>
                <span className="me-2 ms-4">Тип: </span>
                <Form.Select
                    aria-label="Default select example"
                    className="w-25"
                    onChange={handleTypeChange}
                    value={selectedType}
                >
                    <option value=''>Выберите тип продукта</option>
                    {Array.from(productsType).map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </Form.Select>
                <span className="me-2 ms-4">Спецификация: </span>
                <Form.Select
                    aria-label="Default select example"
                    className="w-25"
                    onChange={handleSpecificationChange}
                    value={selectedSpecification}
                >
                    <option value=''>Выберите спецификацию продукта</option>
                    {Array.from(productsSpecification).map(specification => (
                        <option key={specification} value={specification}>{specification}</option>
                    ))}
                </Form.Select>
            </div>
            {productsStatus === 'loading' && <p>Loading...</p>}
            {productsStatus === 'failed' && <p>Error: {productsError}</p>}
            {productsStatus === 'succeeded' && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={animatedKey} // use a key that changes when localProducts changes
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductsList products={localProducts} orders={orders} />
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default Products;
