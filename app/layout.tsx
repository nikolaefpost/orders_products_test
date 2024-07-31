'use client';
import { metadata } from './metadata';
import {Inter} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "@/components/topMenu/TopMenu";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationMenu from "@/components/navigationMenu/NavigationMenu";
import ReduxProvider from './ReduxProvider';

import {motion, AnimatePresence} from 'framer-motion';
import {usePathname} from 'next/navigation';

const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
};

const inter = Inter({subsets: ["cyrillic"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    const pageTitle = metadata.title ?? 'Default Title';
    const pageDescription = metadata.description ?? 'Default Description';
    const pathname = usePathname();
    return (
        <html lang="en">
        <head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}/>
            {/*<link rel="icon" href="/favicon.ico"/>*/}
        </head>
        <body className={inter.className}>
        <ReduxProvider>
            <Container fluid>
                <TopMenu/>
                <Row className="shadow-sm content">
                    <NavigationMenu/>
                    <Col className="shadow-sm bg-body-tertiary" md={10}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={pathname}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants}
                                transition={{type: 'linear'}}
                            >
                                {children}
                            </motion.div>
                        </ AnimatePresence>
                    </Col>
                </Row>
            </Container>
        </ReduxProvider>
        </body>
        </html>
    );
}
