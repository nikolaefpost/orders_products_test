import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "@/components/topMenu/TopMenu";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationMenu from "@/components/navigationMenu/NavigationMenu";
import ReduxProvider from './ReduxProvider';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Orders & Products",
    description: "Test project",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ReduxProvider>
            <Container fluid>
                <TopMenu/>
                <Row className="shadow-sm content">
                    <NavigationMenu/>
                    <Col className="shadow-sm bg-body-tertiary" md={10}>
                        {children}
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
