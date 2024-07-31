import React, {FC} from 'react';
import Image from "next/image";
import {Col, Row} from "react-bootstrap";

interface ProductItemProps {
    isNew: boolean;
    title: string;
    serialNumber: number
}

const ProductItemModal: FC<ProductItemProps> = ({isNew, title, serialNumber}) => {
    return (
        <Row
            className="justify-content-start align-items-center flex-nowrap "
        >
            <Col sm="1" className="justify-content-center d-flex flex-shrink-0">
                <div
                    style={{width: "8px", height: "8px"}}
                    className={`rounded-circle ${isNew ? 'bg-success' : 'bg-dark'}`}
                />
            </Col>
            <Col sm="2" >
                <Image
                    width={60}
                    height={40}
                    className="object-fit-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dDal0KS9TuCM4TGBhDOcAnMj8lm-qjHGVw&s"
                    alt="pic"/>
            </Col>
            <Col sm="9" className="d-flex flex-column flex-shrink-0">
                <span>{title}</span>
                <span className="text-body-secondary">SN-{serialNumber}</span>
            </Col>
        </Row>
    );
};

export default ProductItemModal;