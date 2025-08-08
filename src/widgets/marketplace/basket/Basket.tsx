import React, { useCallback, useState } from 'react';
import { clsx } from 'clsx';
import style from './basket.module.css';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../../hooks/useThemeStyles';

const getDecrement = (count: number) => Math.max(0, count - 1);
const getIncrement = (count: number) => count + 1;

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

function BasketButton({ disabled, onClick }: IBasketButtonProps) {
  const { t } = useTranslation();
  const styleName = useThemeStyles(clsx(style.basket_btn, style.base_btn), {
    light: style.light,
    dark: style.dark,
  });
  return (
    <button className={styleName} disabled={disabled} onClick={onClick}>
      {t('widgets.basket.add')}
    </button>
  );
}

function BasketCounterComponent({ count, onClickIncrement, onClickDecrement }: IBasketCounterComponentProps) {
  const styleName = useThemeStyles(clsx(style.counter_btn, style.base_btn), {
    light: style.light,
    dark: style.dark,
  });
  return (
    <>
      <button className={styleName} onClick={onClickDecrement}>
        -
      </button>
      <input className={style.count_input} disabled value={count} />
      <button className={styleName} onClick={onClickIncrement}>
        +
      </button>
    </>
  );
}

export function Basket({ initCount, disabled, className }: IBasketProps) {
  const [count, setCount] = useState(initCount);
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => getIncrement(prevCount));
  }, []);
  const handleDecrement = useCallback(() => {
    setCount((prevCount) => getDecrement(prevCount));
  }, []);
  return (
    <div className={clsx(className, style.main)}>
      {count === 0 ? (
        <BasketButton onClick={handleIncrement} disabled={disabled} />
      ) : (
        <BasketCounterComponent count={count} onClickIncrement={handleIncrement} onClickDecrement={handleDecrement} />
      )}
    </div>
  );
}

export default Basket;
