import React, {FC, useEffect, useState} from 'react';
import {IOrder} from "@/types";
import {Col, Row} from "react-bootstrap";
import OrderItemShort from "@/components/order/OrderItemShort";
import ProductsListShort from "@/components/order/ProductsListShort";

// import useFetchOrdersAndProducts from "@/hooks/useFetchOrdersAndProducts";

interface OrderListShortProps {
    orderId: number;
    orders: IOrder[];
    handlerChangeOrderId: (id: number) => void;
    handlerHideProducts: () => void;
}

const OrderListShort: FC<OrderListShortProps> = ({
                                                     orderId,
                                                     orders,
                                                     handlerChangeOrderId,
                                                     handlerHideProducts
                                                 }) => {
    const [currentOrders, setCurrentOrders] = useState<IOrder>(orders[orderId - 1]);
    useEffect(() => {
        setCurrentOrders(orders[orderId - 1]);
    }, [orderId, orders]);

    return (
        <Row>
            <Col sm="4" >
                {orders.map(item => (
                    <OrderItemShort key={item.id} order={item} handlerChangeOrderId={handlerChangeOrderId}
                                    orderId={orderId}/>
                ))}
            </Col>
            <Col sm="8">
                <ProductsListShort
                    products={currentOrders.products}
                    title={currentOrders.title}
                    handlerHideProducts={handlerHideProducts}
                    orderId={orderId}
                />
            </Col>
        </Row>
    );
};

export default OrderListShort;