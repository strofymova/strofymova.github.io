export const getValueInRange = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const getValueByCursor = ({
  min,
  max,
  rootClientX,
  cursorClientX,
  rootWidth,
}: {
  cursorClientX: number;
  rootClientX: number;
  rootWidth: number;
  min: number;
  max: number;
}) => {
  const range = max - min;
  const x = cursorClientX - rootClientX;
  const percent = x / rootWidth;
  return getValueInRange(Math.round(range * percent) + min, min, max);
};

export const getPercentagePosition = (value: number, min: number, max: number): string => {
  const range = max - min;
  const position = ((value - min) / range) * 100;
  return `${Math.min(100, Math.max(0, position))}%`;
};
