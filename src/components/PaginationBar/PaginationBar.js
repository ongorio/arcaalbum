import {useState} from "react";

import styles from './PaginationBar.module.css'


function PaginationBar (props) {


    const { data, onnext, onprev, currentPage } = props;



    return <div className={`${styles['pagination-bar']}`}>
        <button disabled={!(currentPage > 1)} onClick={onprev}>Prev</button> |
        Page {currentPage} of {data.length}
        <button disabled={(currentPage >= data.length)} onClick={onnext}>Next</button>

    </div>

}

export default PaginationBar;