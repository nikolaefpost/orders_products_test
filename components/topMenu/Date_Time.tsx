'use client';
import React from 'react';
import {Col} from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import useClock from "@/hooks/useClock";

const DateTime = () => {
    const { formattedTime, formattedDate, weekday } = useClock();
    return (
        <Col className="" xxl={2} xl={3} md={4}>
            <div className="clock">
                <div className="text-capitalize">{weekday}</div>
                <div className=''>
                    {formattedDate}  <FaRegClock className="text-success mb-1 me-1 ms-2" /> {formattedTime}
                </div>
            </div>
        </Col>
    );
};

export default DateTime;