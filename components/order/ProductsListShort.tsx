import React, {FC} from 'react';
import {CloseButton, Col, Row} from "react-bootstrap";
import {IProduct} from "@/types";
import { BiSolidPlusCircle } from "react-icons/bi";
import ProductItemShort from "@/components/order/ProductItemShort";

interface ProductsListProps {
    products: IProduct[];
    title: string;
    handlerHideProducts: () => void;
}

const ProductsListShort: FC<ProductsListProps> = ({products, title, handlerHideProducts}) => {
    return (
        <div className="container  position-relative p-4 bg-body rounded">
            <div
                className="position-absolute  border rounded-circle p-1 shadow bg-body
                 d-flex justify-content-center align-items-center"
                style={{top: "-15px", right: "-15px"}}
            >
                <CloseButton aria-label="Hide"  onClick={handlerHideProducts} />
            </div>

            <h4 className="text-capitalize">{title}</h4>
            <Row className="d-flex my-4 ">
                <Col className="justify-content-start">
                    <button className="border-0 bg-transparent"> <BiSolidPlusCircle color="#198754" size={20}/></button>
                    <span className="text-success ms-2">Добавить прордукт</span>
                </Col>
            </Row>
            {products.map(item=>(
                <ProductItemShort key={item.id} product={item} />
            ))}
        </div>
    );
};

export default ProductsListShort;