import React from 'react'
import { View, Link } from '@react-pdf/renderer'
import { Name, Username } from './elements'

function SocialMedia({ name, profileUrl, ...props }) {
  const username = `@${profileUrl.split('/').splice(-1)}`

  return (
    <Link src={profileUrl} {...props}>
      <View>
        <Name>{name}</Name>
        <Username>{username}</Username>
      </View>
    </Link>
  )
}

export default SocialMedia
