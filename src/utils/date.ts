import dayjs, { type Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { z } from "zod";

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

export type DateLike = Date | Dayjs | number | string;

export const date = dayjs;

export function formatDate(value: DateLike, format = "DD-MM-YYYY"): string {
  if (!value) {
    return "N/A";
  }

  return date(value).format(format);
}

export function formatRelativeDate(value: DateLike): string {
  return date(value).fromNow();
}

export const dateSchema = z.coerce.date().transform((date) => date.toISOString());
