import React from 'react';
import {Col} from "react-bootstrap";
import styles from "./top_menu.module.css";
import cn from 'classnames';

const Search = () => {
    return (
        <Col xxl={8} xl={6} md={5}>
            <div className={cn("input-group w-50", styles.top_menu__search)}>
                {/*<span className="input-group-text" id="basic-addon1">@</span>*/}
                <input
                    type="text"
                    className={cn("form-control bg-body-tertiary", styles.top_menu__search_input)}
                    placeholder="Поиск"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>
        </Col>
    );
};

export default Search;