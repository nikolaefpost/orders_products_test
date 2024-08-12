import React, {FC, useCallback, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OrderList from "@/components/order/OrderList";
import OrderListShort from "@/components/order/OrderListShort";
import { IOrder } from "@/types";

interface OrdersAllProps {
    orders: IOrder[];
}

const OrdersAll: FC<OrdersAllProps> = ({ orders }) => {
    const [showProducts, setShowProducts] = useState(false);
    const [orderId, setOrderId] = useState(0);

    const handlerShowProducts = useCallback ((id: number) => {
        setOrderId(id);
        setShowProducts(true);
    }, [setOrderId, setShowProducts]);

    const handlerChangeOrderId = (id: number) => {
        setOrderId(id);
    };

    const handlerHideProducts = () => setShowProducts(false);

    return (
        <AnimatePresence mode="wait">
            {!showProducts ? (
                <motion.div
                    key="order-list"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <OrderList orders={orders} handlerShowProducts={handlerShowProducts} />
                </motion.div>
            ) : (
                <motion.div
                    key="order-list-short"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <OrderListShort
                        orderId={orderId}
                        orders={orders}
                        handlerChangeOrderId={handlerChangeOrderId}
                        handlerHideProducts={handlerHideProducts}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OrdersAll;
