import React, {FC} from 'react';
import {Row, Col} from "react-bootstrap";
import {IOrder} from "@/types";
import { FaList } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import {calculateTotalAmounts, transformDateWithTime} from "@/helpers";
import {useDispatch} from "react-redux";
import {removeOrder} from "@/store/ordersSlice";

interface OrderItemProps {
    order: IOrder;
    handlerShowProducts: (id: number) =>void
}


const OrderItem: FC<OrderItemProps> = ({order, handlerShowProducts}) => {
    const dispatch = useDispatch();
    const {id, title, date, products} = order;
    const amountProduct = products.length
    const { dateString, timeString } = transformDateWithTime(date);
    const {totalUAH, totalUSD} = calculateTotalAmounts(products)


    const handleRemoveOrder = () => {
        dispatch(removeOrder(id));
    };
    return (
        <Row className="border mt-2 py-3 align-items-center shadow rounded">
            <Col md="5" className="ps-4">{title}</Col>
            <Col md="2" className="d-flex justify-content-start align-items-center column-gap-3">
                <div className="border rounded-circle p-2 d-flex justify-content-center align-items-center ">
                    <button
                        className="border-0 bg-transparent"
                        onClick={()=>handlerShowProducts(id)}
                    ><FaList size={20}/></button>
                </div>
                <div className="d-flex flex-column">
                    <span>{amountProduct}</span>
                    <span>Продукта</span>
                </div>

            </Col>
            <Col className="d-flex flex-column align-items-center" md="2">
                <span  style={{fontSize: "12px"}}> {timeString}</span>
                <span>{dateString}</span>
            </Col>
            <Col className="d-flex flex-column " md="2">
                <span  style={{fontSize: "12px"}}> {totalUSD} $</span>
                <span>{totalUAH} UAN</span>
            </Col>
            <Col md="1"><button className="border-0 bg-transparent" onClick={handleRemoveOrder}><RiDeleteBin6Line /></button></Col>
        </Row>
    );
};

export default OrderItem;