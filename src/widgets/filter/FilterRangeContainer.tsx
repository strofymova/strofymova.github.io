import React from 'react';
import { FilterRangeComponent } from './FilterRangeComponent';
import { useSlider } from '../../hooks/useSlider';

export type FilterRangeContainerProps = {
  className?: string;
  valueMin: number;
  valueMax: number;
  onChangeValueMin: (value: number) => void;
  onChangeValueMax: (value: number) => void;
  min: number;
  max: number;
};

export function FilterRangeContainer({
  className,
  valueMin,
  valueMax,
  onChangeValueMin,
  onChangeValueMax,
  min,
  max,
}: FilterRangeContainerProps) {
  const {
    position: minPosition,
    constrainedValue: constrainedMin,
    getSliderHandler: getMinSliderHandler,
  } = useSlider({
    initialValue: valueMin,
    minLimit: min,
    maxLimit: max,
    constrainValue: (value, otherValue) => Math.min(value, otherValue),
    onChange: onChangeValueMin,
  });

  const {
    position: maxPosition,
    constrainedValue: constrainedMax,
    getSliderHandler: getMaxSliderHandler,
  } = useSlider({
    initialValue: valueMax,
    minLimit: min,
    maxLimit: max,
    constrainValue: (value, otherValue) => Math.max(value, otherValue),
    onChange: onChangeValueMax,
  });

  const onStartMin = getMinSliderHandler(valueMax);
  const onStartMax = getMaxSliderHandler(valueMin);

  return (
    <FilterRangeComponent
      className={className}
      minPosition={minPosition}
      maxPosition={maxPosition}
      valueMin={constrainedMin}
      valueMax={constrainedMax}
      min={min}
      max={max}
      onStartMin={onStartMin}
      onStartMax={onStartMax}
      onChangeValueMin={onChangeValueMin}
      onChangeValueMax={onChangeValueMax}
    />
  );
}

export default FilterRangeContainer;
