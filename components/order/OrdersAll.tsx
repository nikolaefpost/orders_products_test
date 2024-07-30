import React, { FC, useState } from 'react';
import OrderList from "@/components/order/OrderList";
import OrderListShort from "@/components/order/OrderListShort";
import { IOrder } from "@/types";
import cn from "classnames";
import './order.css'; // Import the CSS file for animations

interface OrdersAllProps {
    orders: IOrder[];
}

const OrdersAll: FC<OrdersAllProps> = ({ orders }) => {
    const [showProducts, setShowProducts] = useState(false);
    const [orderId, setOrderId] = useState(0);

    const handlerShowProducts = (id: number) => {
        setOrderId(id);
        setShowProducts(true);
    };

    const handlerChangeOrderId = (id: number) => {
        setOrderId(id);
    };

    const handlerHideProducts = () => setShowProducts(false);

    return (
        <div>
            {!showProducts ? (
                <div
                    // className={`fade ${showProducts ? 'fade-hidden' : ''}`}
                    className={cn("my_fade",{["my_fade-hidden"]: showProducts})}
                >
                    <OrderList orders={orders} handlerShowProducts={handlerShowProducts} />
                </div>
            ) : (
                <div className={cn("my_fade",{["my_fade-hidden"]: !showProducts})}>
                    <OrderListShort
                        orderId={orderId}
                        orders={orders}
                        handlerChangeOrderId={handlerChangeOrderId}
                        handlerHideProducts={handlerHideProducts}
                    />
                </div>
            )}
        </div>
    );
};

export default OrdersAll;
