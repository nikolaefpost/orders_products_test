import React, {FC, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import {IProduct} from "@/types";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import ProductItemModal from "@/components/products/ProductItemModal";
import ModalCustom from "@/components/UI/ModalCustom";
import {AppDispatch} from "@/store";
import { removeProduct} from "@/store/productsSlice";
import {deleteProductFromOrder} from "@/store/ordersSlice";


interface ProductItemProps {
    product: IProduct;
    orderId: number
}

const ProductItemShort: FC<ProductItemProps> = ({product}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [show, setShow] = useState(false);
    const isNew = product.isNew === 1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveOrder = () => {
        dispatch(deleteProductFromOrder({orderId: product.order, productId: product.id}));
        dispatch(removeProduct(product.id))
    };
    return (<>
            <Row className="  py-3 align-items-center border rounded">
                <Col sm={1} className="justify-content-center d-flex">
                    <div
                        style={{width: "8px", height: "8px"}}
                        className={`rounded-circle ${isNew ? 'bg-success' : 'bg-dark'}`}
                    />
                </Col>
                <Col sm={2}>
                    <Image
                        width={50}
                        height={40}
                        className="object-fit-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dDal0KS9TuCM4TGBhDOcAnMj8lm-qjHGVw&s"
                        alt="pic"/>
                </Col>
                <Col md="6" className="d-flex flex-column">
                    <span>{product.title}</span>
                    <span className="text-body-secondary">SN-{product.serialNumber}</span>
                </Col>
                <Col md="2">{isNew ? <span className="text-success">Свободен</span> :
                    <span className="text-dark">В ремонте</span>}</Col>
                <Col md="1">
                    <button className="border-0 bg-transparent" onClick={handleShow}><RiDeleteBin6Line/></button>
                </Col>
            </Row>
            <ModalCustom
                show={show}
                handleClose={handleClose}
                title="Вы уверенны, что хотите удалить этот продукт?"
                handleRemoveOrder={handleRemoveOrder}
            >
                <ProductItemModal title={product.title} isNew={isNew} serialNumber={product.serialNumber}/>
            </ModalCustom>
        </>
    );
};

export default ProductItemShort;