'use client';

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

// export const metadata: Metadata = {
//     title: "OrdersAll & Products",
//     description: "Test project",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <html lang="en">
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
                {/*<div className="d-flex justify-content-center mt-3">*/}
                {/*    <Button variant="primary">Click Me</Button>*/}

                {/*</div>*/}
            </Container>
        </ReduxProvider>
        </body>
        </html>
    );
}
