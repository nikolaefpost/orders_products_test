import React from 'react';
import {Button, Row} from "react-bootstrap";

import styles from "./orders.module.css"

const Orders = () => {
    return (
        <div className='p-5'>
            <div className='d-flex align-items-center justify-content-start '>
                <Button size="lg" className="rounded-circle me-3" variant="success">+</Button>
                {/*<button className={styles.orders__title__addButton}>+</button>*/}
                <h3> Приходы / 25 </h3>
            </div>
        </div>
    );
};

export default Orders;