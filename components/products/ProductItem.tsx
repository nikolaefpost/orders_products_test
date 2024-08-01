import React, {FC, useState} from 'react';
import {IOrder, IProduct} from "@/types";
import { Row} from "react-bootstrap";
import Image from "next/image";
import cn from "classnames";
import {getOrderTitle, transformDate, transformDateNumber} from "@/helpers";
import {useDispatch} from "react-redux";
import ModalCustom from "@/components/UI/ModalCustom";
import ProductItemModal from "@/components/products/ProductItemModal";
import {AppDispatch} from "@/store";
import {deleteProductFromOrder} from "@/store/ordersSlice";
import {removeProduct} from "@/store/productsSlice";

import styles from "./productComponents.module.css";
import DeleteIcon from "@/assets/svg/DeleteIcon";

interface ProductItemProps {
    product: IProduct;
    orders: IOrder[];
}

const ProductItem: FC<ProductItemProps> = ({product, orders}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [show, setShow] = useState(false);
    const isNew = product.isNew === 1
    const {dateString: guaranteeStart} = transformDate(product.guarantee.start)
    const {dateString: guaranteeEnd} = transformDate(product.guarantee.end);
    const {dateString} = transformDate(product.date);
    const { dateString: numberFormat} = transformDateNumber(product.date)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRemoveOrder = () => {
        dispatch(deleteProductFromOrder({orderId: product.order, productId: product.id}));
        dispatch(removeProduct(product.id))
    };

    return (<>
            <Row
                className={cn("justify-content-start align-items-center flex-nowrap border mt-2 py-3 shadow-sm rounded",
                    styles.product)}
            >
                {/*<div className={styles.item}>*/}
                <div className={cn("justify-content-center d-flex flex-shrink-0", styles.product_status)}>
                    <div
                        style={{width: "8px", height: "8px"}}
                        className={`rounded-circle ${isNew ? 'bg-success' : 'bg-dark'}`}
                    />
                </div>
                <div className={cn("flex-shrink-0", styles.product_image)}>
                    <Image
                        width={50}
                        height={40}
                        className="object-fit-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dDal0KS9TuCM4TGBhDOcAnMj8lm-qjHGVw&s"
                        alt="pic"/>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_title)}>
                    <span>{product.title}</span>
                    <span className="text-body-secondary">SN-{product.serialNumber}</span>
                </div>
                <div className={cn("flex-shrink-0", styles.product_status_text)}>
                    <span className="text-dark">{product.specification}</span>
                    {/*{isNew ? <span className="text-success">Свободен</span> :*/}
                    {/*    <span className="text-dark">В ремонте</span>}*/}
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0 align-items-end", styles.product_guarantee)}>
                    <span> с {guaranteeStart}</span>
                    <span className="text-body-secondary">по {guaranteeEnd}</span>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_state)}>
                    <span>{isNew ? "Новый" : "Б/У"}</span>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_price)} >
                    <span style={{ fontSize: "12px" }}> {product.price[0]?.value} $</span>
                    <span>{product.price[1]?.value} UAN</span>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_group)}>
                    <span>Монитор 28" Samsung Odyssey G7 проверенные на битые пиксели</span>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_author)}>
                    <span>Пушкин Александ Сергеевич</span>
                </div>
                <div className={cn("d-flex flex-column flex-shrink-0", styles.product_order)}>
                    <span>{getOrderTitle(orders, product.order)}</span>
                </div>
                <div className={cn("d-flex flex-column align-items-center flex-shrink-0", styles.product_date)}>
                    <span style={{fontSize: "12px"}}> {numberFormat}</span>
                    <span>{dateString}</span>
                </div>
                <div className={cn("flex-shrink-0", styles.product_delete)}>
                    <button className="border-0 bg-transparent" onClick={handleShow}>
                        <DeleteIcon  size={20}/>
                    </button>
                </div>
                {/*</div>*/}
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

export default ProductItem;