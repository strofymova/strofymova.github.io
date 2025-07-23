import React from 'react';

export type FilterRangeInputProps = {
  className?: string;
  onChange: (value: number) => void;
  value: number;
  min: number;
  max: number;
};

export const FilterRangeInput = ({ className, value, onChange, min, max }: FilterRangeInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _value = Number(e.target.value.replace(/[^\d-]/g, ''));

    onChange(_value);
  };

  return <input className={className} type="number" min={min} max={max} value={value} onChange={handleChange} />;
};
