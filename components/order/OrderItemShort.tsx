import React, {FC} from 'react';
import {IOrder} from "@/types";
import {Col, Row} from "react-bootstrap";
import { transformDateWithTime} from "@/helpers";
import {FaList} from "react-icons/fa";

interface OrderItemProps {
    order: IOrder;
    handlerChangeOrderId: (id: number) => void;
    orderId: number
}

const OrderItemShort: FC<OrderItemProps> = ({order, handlerChangeOrderId, orderId}) => {
    const {id, date,  products} = order;
    const amountProduct = products.length
    const { dateString, timeString } = transformDateWithTime(date);
    return (
        <Row className='justify-content-start border mt-2 py-3 align-items-center shadow rounded position-relative'>
            <Col md="5" className="d-flex justify-content-start align-items-center column-gap-3">
                <div className="border rounded-circle p-2 d-flex justify-content-center align-items-center ">
                    <button
                        className="border-0 bg-transparent"
                        onClick={()=>handlerChangeOrderId(id)}
                    ><FaList size={20}/></button>
                </div>
                <div className="d-flex flex-column">
                    <span>{amountProduct}</span>
                    <span>Продукта</span>
                </div>

            </Col>
            <Col className="d-flex flex-column align-items-center" md="6">
                <span  style={{fontSize: "12px"}}> {timeString}</span>
                <span>{dateString}</span>
            </Col>
            {id === orderId && <div
                className="position-absolute top-0 end-0 h-100  border bg-dark-subtle d-flex justify-content-center
                 align-items-center text-white fs-5 rounded"
                style={{width: "50px"}}
            >&gt;</div>}
        </Row>
    );
};

export default OrderItemShort;