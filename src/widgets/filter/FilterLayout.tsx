import { clsx } from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { SortingInput } from 'src/shared/server.types';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import styles from './filter_layout.module.css';

interface IFilterState {
  visibility: boolean;
  sorting: SortingInput;
  onChangeSort: (sorting: SortingInput) => void;
}

interface IFilterLayoutProps {
  initialVisibility?: boolean;
  sorting: SortingInput;
  onChangeSort: (sorting: SortingInput) => void;
}

const FilterLayout = forwardRef<HTMLDivElement, IFilterLayoutProps>(
  ({ initialVisibility = false, sorting, onChangeSort }, ref) => {
    const [state, setState] = useState<IFilterState>({
      visibility: initialVisibility,
      sorting: sorting,
      onChangeSort: onChangeSort,
    });
    const { t } = useTranslation();
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

    // const [minValuePrice, setMinValuePrice] = useState(0);
    // const [maxValuePrice, setMaxValuePrice] = useState(1000);

    // const handleMinChange = (newValue: number) => {
    //   setMinValuePrice(newValue);
    // };

    // const handleMaxChange = (newValue: number) => {
    //   setMaxValuePrice(newValue);
    // };

    return (
      <div
        ref={ref}
        className={clsx(mainStyle, styleName)}
        onMouseEnter={handleOnHoverEnter}
        onMouseLeave={handleOnHoverLeave}
        // onClick={handleOnHoverLeave}
      >
        {state.visibility && (
          // <FilterRangeContainer
          //   className="custom-range-filter"
          //   min={0}
          //   max={1000}
          //   valueMin={minValuePrice}
          //   valueMax={maxValuePrice}
          //   onChangeValueMin={handleMinChange}
          //   onChangeValueMax={handleMaxChange}
          // />
          <div className={styles.select}>
            <span className={styles.select_title}>{t('widgets.selectSort')}</span>
            <select
              value={`${sorting.type}`}
              onChange={(e) => {
                onChangeSort({ ...sorting, type: e.target.value as 'ASC' | 'DESC' });
              }}
            >
              <option value="ASC">Name A-Z</option>
              <option value="DESC">Name Z-A</option>
            </select>
          </div>
        )}
      </div>
    );
  }
);
FilterLayout.displayName = 'FilterLayout';
export default FilterLayout;
