import { DATE_FORMET as dateFormat } from "../constants";
import { DateTime } from "luxon";

export const convertToRoute = (str) => {
  return str.toLowerCase().replaceAll(" ", "-");
};

export const changeCelToFah = (val) => {
  return val * (9 / 5) + 32;
};

export const changeFahToCel = (val) => {
  return (val - 32) * (5 / 9);
};

export const convertTemp = (val, name) => {
  return name === "Celsius" ? changeCelToFah(val) : changeFahToCel(val);
};

export const validateDate = (date) => {
  const parsedDate = DateTime.fromFormat(date, dateFormat);
  let res = {};
  parsedDate.isValid
    ? (res.dateTimeStamp = parsedDate.ts)
    : (res.error =
        parsedDate.invalidReason === "unparsable"
          ? "invalid Date | (dd.MM.yyyy)"
          : parsedDate.invalidReason);
  return res;
};

export const isEndDateValid = (strDate, endDate) => {
  return strDate < endDate ? true : false;
};
