import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { RecordContextProvider, useListContext } from 'react-admin';

import { PlayerItem } from './PlayerItem';
import { Player } from './../../types';

const PlayerListMobile = () => {
  const { data, isLoading, total } = useListContext<Player>();
  if (isLoading || Number(total) === 0) {
    return null;
  }
  return (
    <List sx={{ width: '100vw' }}>
      {data.map((player) => (
        <RecordContextProvider value={player} key={player.ref_id}>
          <PlayerItem />
        </RecordContextProvider>
      ))}
    </List>
  );
};

PlayerListMobile.propTypes = {
  data: PropTypes.any,
  hasBulkActions: PropTypes.bool.isRequired,
  ids: PropTypes.array,
  onToggleItem: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired
};

PlayerListMobile.defaultProps = {
  hasBulkActions: false,
  selectedIds: []
};

export default PlayerListMobile;
