import * as React from 'react';
import { Avatar, type SxProps } from '@mui/material';
import { type FieldProps, useRecordContext } from 'react-admin';

import { type Player } from '../types';

interface Props extends FieldProps<Player> {
  sx?: SxProps;
  size?: string;
}

const AvatarField = ({ size = '25', sx }: Props): JSX.Element | null => {
  const record = useRecordContext<Player>();
  if (!record) return null;
  return (
    <Avatar
      src={`${record.icon_img}`}
      style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
      sx={sx}
    />
  );
};

export default AvatarField;
