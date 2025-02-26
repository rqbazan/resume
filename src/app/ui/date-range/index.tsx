import { format as dateFnsFormat } from 'date-fns/format'
import { parse as dateFnsParse } from 'date-fns/parse'
import { useStrings } from '~/app/hooks'
import type { Style } from '~/react-pdf'
import { IconText } from '../icon-text'

export interface DateRangeProps {
  style?: Style
  startAt: string
  endAt?: string
}

export function formatDate(dateString: string, format = 'LL/yyyy') {
  const formatString = 'yyyy-MM-dd'
  const referenceDate = new Date()

  return dateFnsFormat(
    dateFnsParse(dateString, formatString, referenceDate),
    format,
  )
}

export function DateRange({ startAt, endAt, style }: DateRangeProps) {
  const s = useStrings()

  const dateRangeText = [
    formatDate(startAt),
    endAt ? formatDate(endAt) : s['placeholder.endAt'],
  ].join(' - ')

  return <IconText style={style} text={dateRangeText} iconName="calendar" />
}
