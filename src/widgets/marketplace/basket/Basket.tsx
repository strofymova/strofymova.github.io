import React, { useContext, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import style from './basket.module.css';
import { useTranslation } from 'react-i18next';
import { Theme, ThemeContext } from '../../../app/App';

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
  count: number;
  disabled: boolean;
  onClick(): void;
}

interface IBasketCounterComponentProps {
  count: number;
  onClickIncrement(): void;
  onClickDecrement(): void;
}

function BasketButton({ disabled, onClick }: IBasketButtonProps) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [styleName, setStyleName] = useState(
    clsx(style.basket_btn, style.base_btn, theme === Theme.light ? style.dark : style.light)
  );
  useEffect(() => {
    setStyleName(clsx(style.basket_btn, style.base_btn, theme === Theme.light ? style.dark : style.light));
  }, [theme]);
  return (
    <button className={styleName} disabled={disabled} onClick={onClick}>
      {t('widgets.basket.add')}
    </button>
  );
}

function BasketCounterComponent({ count, onClickIncrement, onClickDecrement }: IBasketCounterComponentProps) {
  const { theme } = useContext(ThemeContext);
  const [styleName, setStyleName] = useState(
    clsx(style.counter_btn, style.base_btn, theme === Theme.light ? style.dark : style.light)
  );
  useEffect(() => {
    setStyleName(clsx(style.counter_btn, style.base_btn, theme === Theme.light ? style.dark : style.light));
  }, [theme]);
  return (
    <>
      <button className={styleName} onClick={onClickDecrement}>
        -
      </button>
      <input className={style.count_input} disabled value={count}></input>
      <button className={styleName} onClick={onClickIncrement}>
        +
      </button>
    </>
  );
}

export function Basket({ initCount, disabled, className }: IBasketProps) {
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
        <BasketButton count={count} onClick={onClickIncrement} disabled={disabled} />
      ) : (
        <BasketCounterComponent count={count} onClickIncrement={onClickIncrement} onClickDecrement={onClickDecrement} />
      )}
    </div>
  );
}

export default Basket;
