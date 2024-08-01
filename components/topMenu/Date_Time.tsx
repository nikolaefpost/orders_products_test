'use client';
import React from 'react';
import {Col} from "react-bootstrap";
import useClock from "@/hooks/useClock";
import Clock from "@/assets/svg/Clock";

const DateTime = () => {
    const { formattedTime, formattedDate, weekday } = useClock();
    return (
        <Col className="" xxl={2} xl={3} md={4}>
            <div className="clock">
                <div className="text-capitalize">{weekday}</div>
                <div className=''>
                    {formattedDate}  <Clock className="mb-1 me-1 ms-3" /> {formattedTime}
                </div>
            </div>
        </Col>
    );
};

export default DateTime;