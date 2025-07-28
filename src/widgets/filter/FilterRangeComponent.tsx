import React from 'react';
import { clsx } from 'clsx';
import s from './filter_range.module.css';
import { FilterRangeInput } from './FilterRangeInput';

export type RangeSliderType = 'min' | 'max';

export type FilterRangeComponentProps = {
  className?: string;
  minPosition: string;
  maxPosition: string;
  valueMin: number;
  valueMax: number;
  min: number;
  max: number;
  onStartMin: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  onStartMax: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
  onChangeValueMin: (value: number) => void;
  onChangeValueMax: (value: number) => void;
};

export function FilterRangeComponent({
  className,
  minPosition,
  maxPosition,
  valueMin,
  valueMax,
  min,
  max,
  onStartMin,
  onStartMax,
  onChangeValueMin,
  onChangeValueMax,
}: FilterRangeComponentProps) {
  return (
    <div className={clsx(s.root, className)}>
      <FilterRangeInput className={s.input} value={valueMin} onChange={onChangeValueMin} min={min} max={max} />
      <div className={s.field}>
        <div
          onMouseDown={onStartMin}
          onTouchStart={onStartMin}
          className={s.runnerLeft}
          style={{ left: minPosition }}
        />
        <div
          onMouseDown={onStartMax}
          onTouchStart={onStartMax}
          className={s.runnerRight}
          style={{ left: maxPosition }}
        />
      </div>
      <FilterRangeInput className={s.input} value={valueMax} onChange={onChangeValueMax} min={min} max={max} />
    </div>
  );
}

export default FilterRangeComponent;
