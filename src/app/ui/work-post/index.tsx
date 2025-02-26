import * as React from 'react'
import { cn } from '~/app/cn'
import { useTheme } from '~/app/hooks'
import { Link, type Style, StyleSheet, Text, View } from '~/react-pdf'
import { DateRange } from '../date-range'
import { IconText } from '../icon-text'

export interface WorkPostProps {
  style?: Style
  endAt?: string
  companyUrl?: string
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

const Title: React.FC<React.PropsWithChildren<{ style?: Style }>> = ({
  children,
  style,
}) => {
  return <Text style={cn(styles.title, style)}>{children}</Text>
}

const WorkPlace: React.FC<
  React.PropsWithChildren<{ style?: Style; url?: string }>
> = ({ children, url, style }) => {
  const theme = useTheme()

  const commonStyle = cn(
    styles.workPlace,
    { color: theme.colors.primary },
    style,
  )

  if (url) {
    return (
      <Link src={url}>
        <Text style={commonStyle}>{children}</Text>
      </Link>
    )
  }

  return <Text style={commonStyle}>{children}</Text>
}

export const WorkPost = ({
  style,
  title,
  companyName,
  companyUrl,
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
        {companyName ? (
          <WorkPlace url={companyUrl}>{companyName}</WorkPlace>
        ) : null}
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
      {React.Children.count(children) > 0 ? (
        <View style={styles.content}>{children}</View>
      ) : null}
    </View>
  )
}

WorkPost.Title = Title

WorkPost.WorkPlace = WorkPlace
