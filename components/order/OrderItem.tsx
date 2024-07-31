import React, { FC, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { IOrder } from "@/types";
import { FaList } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {calculateTotalAmounts, transformDate, transformDateNumber} from "@/helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteOrder } from "@/store/ordersSlice";
import ModalCustom from "@/components/UI/ModalCustom";
import OrderItemModal from "@/components/order/OrderItemModal";

interface OrderItemProps {
    order: IOrder;
    handlerShowProducts: (id: number) => void;
}

const OrderItem: FC<OrderItemProps> = ({ order, handlerShowProducts }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [show, setShow] = useState(false);
    const { id, title, date, products } = order;
    const amountProduct = products.length;
    const { dateString} = transformDate(date);
    const { dateString: numberFormat} = transformDateNumber(date)
    const { totalUAH, totalUSD } = calculateTotalAmounts(products);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveOrder = () => {
        dispatch(deleteOrder(id));
        handleClose();
    };

    return (
        <>
            <Row className="border mt-2 py-3 align-items-center shadow rounded">
                <Col md="5" className="ps-4">{title}</Col>
                <Col md="2" className="d-flex justify-content-start align-items-center column-gap-3">
                    <div className="border rounded-circle p-2 d-flex justify-content-center align-items-center ">
                        <button
                            className="border-0 bg-transparent"
                            onClick={() => handlerShowProducts(id)}
                        ><FaList size={20} /></button>
                    </div>
                    <div className="d-flex flex-column">
                        <span>{amountProduct}</span>
                        <span>Продукта</span>
                    </div>
                </Col>
                <Col className="d-flex flex-column align-items-center" md="2">
                    <span style={{ fontSize: "12px" }}> {numberFormat}</span>
                    <span>{dateString}</span>
                </Col>
                <Col className="d-flex flex-column " md="2">
                    <span style={{ fontSize: "12px" }}> {totalUSD} $</span>
                    <span>{totalUAH} UAN</span>
                </Col>
                <Col md="1">
                    <button className="border-0 bg-transparent" onClick={handleShow}><RiDeleteBin6Line /></button>
                </Col>
            </Row>
            <ModalCustom
                show={show}
                handleClose={handleClose}
                title="Вы уверенны, что хотите удалить этот приход?"
                handleRemoveOrder={handleRemoveOrder}
            >
                <OrderItemModal
                    title={title}
                    amountProduct={amountProduct}
                    dateString={dateString}
                    numberFormat={numberFormat}
                    totalUSD={totalUSD}
                    totalUAH={totalUAH}
                />
            </ModalCustom>
        </>
    );
};

export default OrderItem;
