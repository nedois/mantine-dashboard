import dayjs, { type Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

export type CustomDate = Dayjs;

export const date = dayjs;

export function formatDate(value: Date | CustomDate | string, format = 'DD-MM-YYYY') {
  return date(value).format(format);
}

export function formatRelativeDate(value: Date | CustomDate | string) {
  return date(value).fromNow();
}
