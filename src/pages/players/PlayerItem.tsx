import * as React from 'react';
import { Fragment } from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useCreatePath, BooleanField, useRecordContext } from 'react-admin';

import AvatarField from '../../components/AvatarField';
import { Player } from './../../types';

export const PlayerItem = () => {
  const record = useRecordContext<Player>();
  const createPath = useCreatePath();
  if (!record) {
    return null;
  }
  return (
    <MuiLink
      to={createPath({
        resource: 'players',
        type: 'edit',
        id: record.id
      })}
      component={Link}
      underline="none"
      color="inherit"
    >
      <ListItem button>
        <ListItemAvatar>
          <AvatarField size="40" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Fragment>
              <BooleanField source="verified" />
            </Fragment>
          }
          secondary={record.comment}
          secondaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </MuiLink>
  );
};
