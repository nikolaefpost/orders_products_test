'use client';
import React, { Suspense } from 'react';
import { Button } from "react-bootstrap";
import useFetchOrdersAndProducts from "@/hooks/useFetchOrdersAndProducts";
const OrdersAll = React.lazy(() => import('@/components/order/OrdersAll'));

const Orders = () => {
    const { orders, ordersStatus, ordersError } = useFetchOrdersAndProducts();

    return (
        <div className='p-5'>
            <div className='d-flex align-items-center justify-content-start '>
                <Button size="lg" className="rounded-circle me-3" variant="success">+</Button>
                <h3> Приходы / {orders.length} </h3>
            </div>
            {ordersStatus === 'loading' && <p>Loading orders...</p>}
            {ordersStatus === 'failed' && <p>Error: {ordersError}</p>}
            {ordersStatus === 'succeeded' &&
                <Suspense fallback={<div>Loading component...</div>}>
                    <OrdersAll orders={orders} />
                </Suspense>
            }
        </div>
    );
};

export default Orders;
