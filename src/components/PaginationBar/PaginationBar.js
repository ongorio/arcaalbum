import {useState} from "react";

import styles from './PaginationBar.module.css'

import Button from "../Button/Button";
function PaginationBar (props) {


    const { data, onnext, onprev, currentPage } = props;



    return <div className={`${styles['pagination-bar']}`} style={{color: '#bd9751'}}>
        <Button disabled={!(currentPage > 1)} onClick={onprev} btnType={'btn-ch btn-no-background'}>{'<<'}</Button>
        <strong style={{color: '#8b1739'}}>|</strong>
            Pagina {currentPage} de {data.length}
        <strong style={{color: '#8b1739'}}>|</strong>
        <Button disabled={(currentPage >= data.length)} onClick={onnext} btnType={'btn-ch btn-no-background'}>{'>>'}</Button>

    </div>

}

export default PaginationBar;