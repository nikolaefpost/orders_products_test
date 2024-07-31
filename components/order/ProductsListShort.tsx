import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { IProduct } from "@/types";
import { BiSolidPlusCircle } from "react-icons/bi";
import ProductItemShort from "@/components/order/ProductItemShort";
import CloseButtonCustom from "@/components/UI/CloseButtonCustom";
import { motion, AnimatePresence } from 'framer-motion';

interface ProductsListProps {
    products: IProduct[];
    title: string;
    handlerHideProducts: () => void;
    orderId: number;
}

const ProductsListShort: FC<ProductsListProps> = ({ products, title, handlerHideProducts, orderId }) => {
    const [animateKey, setAnimateKey] = useState(0);

    useEffect(() => {
        setAnimateKey(prev => prev + 1);
    }, [products]);

    return (
        <motion.div
            className="container position-relative p-4 bg-body rounded"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <CloseButtonCustom handlerHide={handlerHideProducts} />

            <h4 className="text-capitalize">{title}</h4>
            <Row className="d-flex my-4 ">
                <Col className="justify-content-start">
                    <button className="border-0 bg-transparent">
                        <BiSolidPlusCircle color="#198754" size={20} />
                    </button>
                    <span className="text-success ms-2">Добавить продукт</span>
                </Col>
            </Row>
            <AnimatePresence mode="wait">
                <motion.div
                    key={animateKey}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {products.map(item => (
                        <ProductItemShort key={item.id} product={item} orderId={orderId} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default ProductsListShort;
