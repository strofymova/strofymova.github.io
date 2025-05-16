import React from 'react';
import styles from './operation_full.module.css';
import {IOperationProps} from './Operation';

export interface IOperationFullProps extends IOperationProps {
    date: string;
};

interface IOperationItemProps {
    title: string,
    value: string | number,
    disable?: boolean
}

function OperationItem (operationItem:IOperationItemProps) {
    const disable = operationItem.disable === null ? false : operationItem.disable;
    return (
        <div className={styles.div_row}>
            {operationItem.title}: 
            <input type='text' className={styles.input_line} disabled={disable} value={operationItem.value}/>
        </div>
    )
}

export function OperationFull (props: IOperationFullProps) {
    const enabled: boolean = false;

    return (
        <div className={styles.main}>
            <OperationItem title='Сумма' value={props.summ} disable={!enabled}/>
            <OperationItem title='Категория' value={props.category} disable={!enabled}/>
            <OperationItem title='Название' value={props.name} disable={!enabled}/>
            <div className={styles.description}>
                Описание:  
                <textarea className={styles.input_multiline}  disabled={!enabled} value={props.description}></textarea> 
            </div>
            <OperationItem title='Дата' value={props.date} disable={!enabled}/>
            <button className={styles.button} disabled={!enabled}>Редактировать</button>
        </div>
    );
}

export default OperationFull;