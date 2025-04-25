import React from 'react';
import styles from './operation.module.css';

export interface IOperationProps  {
    summ: number,
    category: string,
    name: string,
    description: string,
}

export function Operation (props: IOperationProps): React.ReactNode {
    return (
       <div className={styles.main}>
            <div>Cумма: {props.summ}</div>
            <div>Категория: {props.category}</div>
            <div>Название: {props.name}</div>
            <div className={styles.description}>Описание: {props.description}</div>
        </div>
    );
}

export default Operation;