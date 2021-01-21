import format from 'date-fns/format'
import parse from 'date-fns/parse'

export function formatDate(strDate: string): string {
  return format(parse(strDate, 'yyyy-MM-dd', new Date()), 'LL/yyyy')
}
