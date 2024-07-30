import React, {FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import CloseButtonCustom from "@/components/UI/CloseButtonCustom";
import {RiDeleteBin6Line} from "react-icons/ri";
import styles from "./ui.module.css"

interface ModalCustomProps {
    show: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
    title: string;
    handleRemoveOrder: () => void
}

const ModalCustom: FC<ModalCustomProps> = ({
                                               show,
                                               handleClose,
                                               children,
                                               title,
                                               handleRemoveOrder
                                           }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={styles.custom_modal_width}
        >
            <Modal.Header className="position-relative">
                <CloseButtonCustom handlerHide={handleClose}/>
                <Modal.Title className="fs-5">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
                {children}
            </Modal.Body>
            <Modal.Footer className="bg-success py-4 px-3">
                <Button className="border-0 fw-semibold" variant="outline-light" onClick={handleClose}>
                    ОТМЕНИТЬ
                </Button>
                <Button
                    className="bg-body border-0 rounded-5 fw-semibold py-3 px-5"
                    variant="outline-danger"
                    onClick={handleRemoveOrder}
                >
                    <RiDeleteBin6Line/> УДАЛИТЬ
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCustom;