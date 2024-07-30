import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

interface OrderItemModalProps {
    title: string;
    amountProduct: number;
    numberFormat: string;
    dateString: string;
    totalUSD: number;
    totalUAH: number
}

const OrderItemModal: FC<OrderItemModalProps> = ({
                                                     title,
                                                     amountProduct,
                                                     numberFormat,
                                                     totalUSD,
                                                     totalUAH,
                                                     dateString
                                                 }) => {
    return (
        <Row className="  align-items-center ">
            <Col md="5" className="ps-4">{title}</Col>
            <Col md="2" className="d-flex justify-content-start align-items-center column-gap-3">
                <div className="d-flex flex-column align-items-center">
                    <span>{amountProduct}</span>
                    <span>Продукта</span>
                </div>

            </Col>
            <Col className="d-flex flex-column align-items-center" md="3">
                <span style={{fontSize: "12px"}}> {numberFormat}</span>
                <span>{dateString}</span>
            </Col>
            <Col className="d-flex flex-column " md="2">
                <span style={{fontSize: "12px"}}> {totalUSD} $</span>
                <span>{totalUAH} UAN</span>
            </Col>
        </Row>
    );
};

export default OrderItemModal;