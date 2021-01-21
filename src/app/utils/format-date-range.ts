import { formatDate } from './format-date'

type Options = {
  fallbackEndAt: string
}

export function formatDateRange(
  rawStartAt: string,
  rawEndAt: string,
  { fallbackEndAt }: Options
): string {
  const startAt = formatDate(rawStartAt)
  const endAt = rawEndAt ? formatDate(rawEndAt) : fallbackEndAt

  return `${startAt} - ${endAt}`
}
