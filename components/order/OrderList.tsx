import React, {FC} from 'react';
import {IOrder} from "@/types";
import OrderItem from "@/components/order/OrderItem";

interface OrderListProps {
    orders: IOrder[];
    handlerShowProducts: (id: number) =>void
}


const OrderList: FC<OrderListProps> = React.memo( ({orders, handlerShowProducts}) => {
    return (
        <div className="container  mt-5" >
            {orders.map(item =>(
                <OrderItem key={item.id} order={item} handlerShowProducts={handlerShowProducts}/>
            ))}
            </div>
    );
});

export default OrderList;