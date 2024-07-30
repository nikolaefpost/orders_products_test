'use client';
import React from 'react';
import Link from 'next/link';
import styles from './navigation_menu.module.css';
import {usePathname} from "next/navigation";
import cn from 'classnames';

const sideMenu = [
    { title: 'Приход', page: '/orders' },
    { title: 'Группы', page: '/groups' },
    { title: 'Продукты', page: '/products' },
    { title: 'Пользователи', page: '/users' },
    { title: 'Настройки', page: '/settings' },
];

const NavigationMenuList = () => {
    const pathname = usePathname();

    return (
        <div className='d-flex flex-column align-items-center justify-content-start py-5 row-gap-2'>
            {sideMenu.map((item) => (
                <div
                    key={item.page}
                    className={cn(styles.navigation_menu__linkList, {[styles.navigation_menu__linkList_active]: pathname === item.page} )}
                >
                    <Link href={item.page}>{item.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default NavigationMenuList;
