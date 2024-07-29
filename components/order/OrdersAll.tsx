import React, {FC, useState} from 'react';
import OrderList from "@/components/order/OrderList";
import OrderListShort from "@/components/order/OrderListShort";
import {IOrder} from "@/types";

interface OrdersAllProps{
    orders: IOrder[];
}

const OrdersAll: FC<OrdersAllProps> = ({orders}) => {
    const [showProducts, setShowProducts] = useState(false);
    const [orderId, setOrderId] = useState(0);

    const handlerShowProducts = (id: number)=>{
        setOrderId(id)
        setShowProducts(true)
    }

    const handlerChangeOrderId = (id: number) => {
        setOrderId(id)
    }

    const handlerHideProducts = () => setShowProducts(false)
    return !showProducts?
        <OrderList orders={orders} handlerShowProducts={handlerShowProducts}/>
        :<OrderListShort
            orderId={orderId}
            orders={orders}
            handlerChangeOrderId={handlerChangeOrderId}
            handlerHideProducts={handlerHideProducts}
        />
};

export default OrdersAll;