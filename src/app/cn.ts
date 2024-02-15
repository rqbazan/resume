import { Style } from '~/react-pdf'

export function cn(...styles: (Style | undefined)[]): Style[] {
  return styles.filter(Boolean) as Style[]
}
