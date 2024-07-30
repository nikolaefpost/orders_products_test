import React, {FC} from 'react';
import {CloseButton} from "react-bootstrap";
interface CloseButtonProps{
    handlerHide: () => void;
}

const CloseButtonCustom: FC<CloseButtonProps> = ({handlerHide}) => {
    return (
        <div
            className="position-absolute  border rounded-circle p-1 shadow bg-body
                 d-flex justify-content-center align-items-center flex-shrink-0 flex-grow-0"
            style={{top: "-15px", right: "-15px"}}
        >
            <CloseButton aria-label="Hide" onClick={handlerHide} className='m-0'/>
        </div>
    );
};

export default CloseButtonCustom;