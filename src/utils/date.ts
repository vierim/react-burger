import { DAY_FORM } from "./constants";

export default function styledDate(data: string): string {
  
  const orderDate: Date = new Date(data);
  const currentDate: Date = new Date();
  let day = '';

  const dayDelay = currentDate.getDate() - orderDate.getDate();

  if (dayDelay === 0) {
    day = "Сегодня";

  } else if (dayDelay === 1) {
    day = "Вчера";

  } else if (dayDelay >= 2 && dayDelay <= 4) {
    day = `${dayDelay} дня назад`;

  } else if (dayDelay >= 5 && dayDelay <= 19) {
    day = `${dayDelay} дней назад`;

  } else if (dayDelay > 19) {
    const dayDelayToString = dayDelay.toString();
    const lastSymbol = parseInt(dayDelayToString[dayDelayToString.length - 1]);

    const dayForm = DAY_FORM[lastSymbol];
    day = `${dayDelay} ${dayForm} назад`;
  }

  const orderTimezone = -orderDate.getTimezoneOffset() / 60;
  const orderTime = orderDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}, ${orderTime} i-GMT+${orderTimezone}`;
}
