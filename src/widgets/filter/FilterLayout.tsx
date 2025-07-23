import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import styles from './filter_layout.module.css';
import { clsx } from 'clsx';
import FilterRangeContainer from './FilterRangeContainer';

interface IFilterState {
  visibility: boolean;
}

interface IFilterLayoutProps {
  initialVisibility?: boolean;
}

const FilterLayout = forwardRef<HTMLDivElement, IFilterLayoutProps>(({ initialVisibility = false }, ref) => {
  const [state, setState] = useState<IFilterState>({
    visibility: initialVisibility,
  });
  const mainStyle = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  const [styleName, setStyleName] = useState<string>(styles.hide);

  useEffect(() => {
    setStyleName(state.visibility ? styles.show : styles.hide);
  }, [state.visibility]);

  const handleOnHoverEnter = () => {
    setState((prev) => ({ ...prev, visibility: true }));
  };

  const handleOnHoverLeave = () => {
    setState((prev) => ({ ...prev, visibility: false }));
  };

  const [minValuePrice, setMinValuePrice] = useState(0);
  const [maxValuePrice, setMaxValuePrice] = useState(1000);

  const handleMinChange = (newValue: number) => {
    setMinValuePrice(newValue);
  };

  const handleMaxChange = (newValue: number) => {
    setMaxValuePrice(newValue);
  };

  return (
    <div
      ref={ref}
      className={clsx(mainStyle, styleName)}
      onMouseEnter={handleOnHoverEnter}
      onMouseLeave={handleOnHoverLeave}
    >
      {state.visibility && (
        <FilterRangeContainer
          className="custom-range-filter"
          min={0}
          max={1000}
          valueMin={minValuePrice}
          valueMax={maxValuePrice}
          onChangeValueMin={handleMinChange}
          onChangeValueMax={handleMaxChange}
        />
      )}
    </div>
  );
});
FilterLayout.displayName = 'FilterLayout';
export default FilterLayout;
