import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Image from 'next/image'
import user_shield from "@/assets/images/user-shield-64.png"
import Search from "./Search";
import DateTime from "./Date_Time";
import cn from 'classnames';
import styles from "./top_menu.module.css"
import Link from "next/link";

const TopMenu = () => {
    return (
        <Row className={cn(" shadow-sm  d-flex justify-content-start align-items-center px-5", styles.top_menu)}>
            <Col className="d-flex align-items-center " xxl={2} xl={3} md={3}>
                <Link href="/">
                    <Image alt="user" width={50} height={50} src={user_shield} className='me-3'/>
                    <span className='text-success text-uppercase fw-semibold'>iNVENTORY</span>
                </Link>
            </Col>
            <Search/>
            <DateTime/>
        </Row>
    );
};

export default TopMenu;