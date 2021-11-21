import {UNNOWN} from "./constants";

export const displayDuration = (rawMinutes) => {
  if (!rawMinutes) {
    return UNNOWN;
  }

  const hours = Math.floor(rawMinutes / 60);
  const hoursString = hours ? `${hours} ч ` : ``;
  const minutes = rawMinutes % 60;
  const minutesString = minutes ? `${minutes} мин` : ``;

  return `${hoursString} ${minutesString}`;
};

// Обрезает строку, если она длиннее заданной и добавляет троеточие
export const slicedTitle = (str, length) => (
  (str.length > length) ? `${str.slice(0, length)}...` : str
);
