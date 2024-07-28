import React from 'react';
import { Col } from 'react-bootstrap';
import Image from 'next/image'
import hardy from "@/assets/images/Hurdy.jpg";
import { MdSettings } from "react-icons/md";

import styles from "./navigation_menu.module.css";
import NavigationMenuList from "./NavigationMenuList";

const NavigationMenu = () => {

    return (
        <Col
            className='shadow-sm d-flex flex-column align-items-center py-5 '
            md={2}
        >
            <div className={styles.navigation_menu__userImage}>
                <Image alt="user photo" src={hardy}/>
                <div className="position-absolute  rounded-circle bg-body shadow d-flex justify-content-center align-items-center">
                    <MdSettings style={{color: '#6c757d',  fontSize: '20px' }} />
                </div>

            </div>
            <NavigationMenuList/>
        </Col>
    );
};

export default NavigationMenu;