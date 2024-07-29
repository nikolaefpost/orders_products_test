'use client';
import React from 'react';
import {Button} from "react-bootstrap";
import useFetchOrdersAndProducts from "@/hooks/useFetchOrdersAndProducts";
import OrdersAll from "@/components/order/OrdersAll";

const Orders = () => {

    const { orders,
        ordersStatus,
        ordersError} = useFetchOrdersAndProducts();
    return (
        <div className='p-5'>
            <div className='d-flex align-items-center justify-content-start '>
                <Button size="lg" className="rounded-circle me-3" variant="success">+</Button>
                {/*<button className={styles.orders__title__addButton}>+</button>*/}
                <h3> Приходы / {orders.length} </h3>
            </div>
            {ordersStatus === 'loading' && <p>Loading...</p>}
            {ordersStatus === 'failed' && <p>Error: {ordersError}</p>}
            {ordersStatus === 'succeeded' &&<OrdersAll orders={orders} />}
        </div>
    );
};

export default Orders;