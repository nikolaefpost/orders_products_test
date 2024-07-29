import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import {IProduct} from "@/types";
import {RiDeleteBin6Line} from "react-icons/ri";


interface ProductItemProps {
    product: IProduct
}

const ProductItemShort: FC<ProductItemProps > = ({product}) => {
    const isNew = product.isNew === 1
    return (
        <Row className="  py-3 align-items-center border rounded">
            <Col sm={1} className="justify-content-center d-flex">
                <div
                    style={{width: "8px", height: "8px"}}
                    className={`rounded-circle ${isNew ? 'bg-success' : 'bg-dark'}`}
                />
            </Col>
            <Col sm={2}>
                <Image
                    width={50}
                    height={40}
                    className="object-fit-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dDal0KS9TuCM4TGBhDOcAnMj8lm-qjHGVw&s" alt="pic"/>
            </Col>
            <Col md="6" className="d-flex flex-column">
                <span>{product.title}</span>
                <span className="text-body-secondary">SN-{product.serialNumber}</span>
            </Col>
            <Col md="2">{isNew ? <span className="text-success">Свободен</span> : <span className="text-dark">В ремонте</span>}</Col>
            <Col md="1"><button className="border-0 bg-transparent" ><RiDeleteBin6Line /></button></Col>
        </Row>
    );
};

export default ProductItemShort;