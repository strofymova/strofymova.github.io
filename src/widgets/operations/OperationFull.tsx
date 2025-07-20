import React from 'react';
import styles from './operation_full.module.css';
import { IOperationProps } from './Operation';

export interface IOperationFullProps extends IOperationProps {
  date: string;
}

interface IOperationItemProps {
  title: string;
  value: string | number;
  disable?: boolean;
}

function OperationItem({ title, value, disable }: IOperationItemProps) {
  const isDisable = disable === null ? false : disable;
  return (
    <div className={styles.div_row}>
      {title}:
      <input type="text" className={styles.input_line} disabled={isDisable} value={value} />
    </div>
  );
}

export function OperationFull({ category, date, description, name, summ }: IOperationFullProps) {
  const enabled = false;

  return (
    <div className={styles.main}>
      <OperationItem title="Сумма" value={summ} disable={!enabled} />
      <OperationItem title="Категория" value={category} disable={!enabled} />
      <OperationItem title="Название" value={name} disable={!enabled} />
      <div className={styles.description}>
        Описание:
        <textarea className={styles.input_multiline} disabled={!enabled} value={description}></textarea>
      </div>
      <OperationItem title="Дата" value={date} disable={!enabled} />
      <button className={styles.button} disabled={!enabled}>
        Редактировать
      </button>
    </div>
  );
}

export default OperationFull;
