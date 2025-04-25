import React, {useState } from 'react';
import clsx from 'clsx';
import style from './basket.module.css';

function getDecrement(count: number): number {
  return count - 1;
}

function getIncrement(count: number): number {
  return count + 1;
}

interface IBasketProps {
  initCount: number;
  disabled: boolean;
  className?: string;
}

interface IBasketButtonProps {
  disabled: boolean;
  onClick(): void;
}

interface IBasketCounterComponentProps {
  count: number;
  onClickIncrement(): void;
  onClickDecrement(): void;
}

function BasketButton({disabled, onClick }: IBasketButtonProps): React.ReactElement {
  return (
    <button className={clsx(style.basket_btn, style.base_btn)} disabled={disabled} onClick={onClick}>
      В корзину
    </button>
  );
}

function BasketCounterComponent({
  count,
  onClickIncrement,
  onClickDecrement,
}: IBasketCounterComponentProps): React.ReactElement {
  return (
    <>
      <button className={clsx(style.counter_btn, style.base_btn)} onClick={onClickDecrement}>
        -
      </button>
      <input className={style.count_input} disabled value={count}></input>
      <button className={clsx(style.counter_btn, style.base_btn)} onClick={onClickIncrement}>
        +
      </button>
    </>
  );
}

export function Basket({ initCount, disabled, className }: IBasketProps): React.ReactNode {
  const [count, setCount] = useState(initCount);
  function onClickIncrement(): void {
    setCount((prev) => getIncrement(prev));
  }
  function onClickDecrement(): void {
    setCount((prev) => getDecrement(prev));
  }
  return (
    <div className={clsx(className, style.main)}>
      {count === 0 ? (
        <BasketButton onClick={onClickIncrement} disabled={disabled} />
      ) : (
        <BasketCounterComponent count={count} onClickIncrement={onClickIncrement} onClickDecrement={onClickDecrement} />
      )}
    </div>
  );
}

export default Basket;
