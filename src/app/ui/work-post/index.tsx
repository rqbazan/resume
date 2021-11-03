import * as React from 'react'
import { Text, Style, View, StyleSheet } from '~/react-pdf'
import { useTheme } from '~/app/hooks'
import { IconText } from '../icon-text'
import { DateRange } from '../date-range'

export interface WorkPostProps {
  style?: Style
  endAt?: string
  startAt: string
  title: string
  companyName: string
  location: string
  description?: string
  children: React.ReactNode
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  metaInfoContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  workPlace: {
    fontSize: 10,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 8,
    fontFamily: 'OpenSans',
    marginTop: 4,
  },
  content: {
    marginTop: 10,
  },
})

const Title: React.FC<{ style?: Style }> = ({ children, style }) => {
  return <Text style={[styles.title, style!]}>{children}</Text>
}

const WorkPlace: React.FC<{ style?: Style }> = ({ children, style }) => {
  const theme = useTheme()

  return (
    <Text style={[styles.workPlace, { color: theme.colors.primary }, style!]}>
      {children}
    </Text>
  )
}

export const WorkPost = ({
  style,
  title,
  companyName,
  location,
  startAt,
  endAt,
  description,
  children,
}: WorkPostProps) => {
  const theme = useTheme()

  return (
    <View style={style}>
      <Title>{title}</Title>
      <View style={styles.metaInfoContainer}>
        {companyName && <WorkPlace>{companyName}</WorkPlace>}
        <DateRange
          style={{ marginLeft: companyName ? 'auto' : 0, marginRight: 16 }}
          startAt={startAt}
          endAt={endAt}
        />
        <IconText text={location} iconName="location" />
      </View>
      {description && (
        <Text style={[styles.description, { color: theme.colors.text }]}>
          {description}
        </Text>
      )}
      {children && <View style={styles.content}>{children}</View>}
    </View>
  )
}

WorkPost.Title = Title

WorkPost.WorkPlace = WorkPlace
