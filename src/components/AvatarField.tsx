import * as React from 'react'
import { Avatar, SxProps } from '@mui/material'
import { FieldProps, useRecordContext } from 'react-admin'

import { Player } from '../types'

interface Props extends FieldProps<Player> {
  sx?: SxProps
  size?: string
}

const AvatarField = ({ size = '25', sx }: Props) => {
  const record = useRecordContext<Player>()
  if (!record) return null
  return (
    <Avatar
      src={`${record.icon_img}`}
      style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
      sx={sx}
    />
  )
}

export default AvatarField
