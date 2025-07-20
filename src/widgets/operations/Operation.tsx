import React from 'react';
import styles from './operation.module.css';

export interface IOperationProps {
  summ: number;
  category: string;
  name: string;
  description: string;
}

export function Operation({ summ, category, name, description }: IOperationProps) {
  return (
    <div className={styles.main}>
      <div>Cумма: {summ}</div>
      <div>Категория: {category}</div>
      <div>Название: {name}</div>
      <div className={styles.description}>Описание: {description}</div>
    </div>
  );
}

export default Operation;
