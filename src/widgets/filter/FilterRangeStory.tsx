import React, { useEffect, useState } from 'react';

import FilterRangeContainer, { FilterRangeContainerProps } from './FilterRangeContainer';

export const FilterRangeStory: React.FC<FilterRangeContainerProps> = (args: FilterRangeContainerProps) => {
  const [selectedMin, setSelectedMin] = useState(args.valueMin || 20);
  const [selectedMax, setSelectedMax] = useState(args.valueMax || 80);

  const handleMinChange = (value: number) => {
    setSelectedMin(Math.min(value, selectedMax));
  };

  const handleMaxChange = (value: number) => {
    setSelectedMax(Math.max(value, selectedMin));
  };

  useEffect(() => {
    setSelectedMin(Math.min(args.valueMin, selectedMax));
  }, [args.valueMin]);

  useEffect(() => {
    setSelectedMax(Math.max(args.valueMax, selectedMin));
  }, [args.valueMax]);

  return (
    <div style={{ width: '500px', padding: '20px' }}>
      <FilterRangeContainer
        {...args}
        valueMin={selectedMin}
        valueMax={selectedMax}
        onChangeValueMin={handleMinChange}
        onChangeValueMax={handleMaxChange}
      />

      <div
        style={{
          fontFamily: 'monospace',
        }}
      >
        <p>
          Границы диапазона: {args.min} ... {args.max}
        </p>
      </div>
    </div>
  );
};
