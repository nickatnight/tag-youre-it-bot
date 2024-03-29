import * as React from 'react';
import { type SxProps, Typography } from '@mui/material';
import { memo } from 'react';

import { type FieldProps, useRecordContext } from 'react-admin';
import AvatarField from './AvatarField';
import { type Player } from '../types';

interface Props extends FieldProps<Player> {
  size?: string;
  sx?: SxProps;
}

const UsernameField = (props: Props): JSX.Element | null => {
  const { size } = props;
  const record = useRecordContext<Player>();
  return record ? (
    <Typography
      variant="body2"
      display="flex"
      flexWrap="nowrap"
      alignItems="center"
      component="div"
      sx={props.sx}
    >
      <AvatarField
        record={record}
        size={size}
        sx={{
          mr: 1,
          mt: -0.5,
          mb: -0.5
        }}
      />
      {record.username}
    </Typography>
  ) : null;
};

UsernameField.defaultProps = {
  source: 'username',
  label: 'resources.players.fields.name'
};

export default memo<Props>(UsernameField);
