export default function styledDate(data: string): string {
  let day = '';
  const locale = navigator.language;

  const orderDate: Date = new Date(data);
  const currentTime: Date = new Date();
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const midnightDiff = currentTime.getTime() - midnight.getTime();

  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
  };

  const orderTimeWrapper = new Intl.DateTimeFormat(locale, timeOptions);
  const orderTime = orderTimeWrapper.format(orderDate);

  const orderDateWrapper = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'day',
    unitDisplay: 'long',
  });

  const timeDelay = currentTime.getTime() - orderDate.getTime();
  const daysDelay = Math.ceil((midnight.getTime() - orderDate.getTime()) / 86400000);

  if (timeDelay < midnightDiff) {
    day = 'Сегодня';
  } else {
    if (daysDelay === 1) {
      day = 'Вчера';
    } else {
      day = `${orderDateWrapper.format(daysDelay)} назад`;
    }
  }

  const res = `${day}, ${orderTime}`;

  return res;
}
