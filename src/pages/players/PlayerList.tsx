import * as React from 'react'
import { List } from 'react-admin'
import { matchPath, useLocation } from 'react-router-dom'
import { Box, useMediaQuery, Theme } from '@mui/material'

import PlayerListMobile from './PlayerListMobile'
import PlayerListDesktop from './PlayerListDesktop'
import playerFilters from './playerFilters'
import Empty from '../../components/Empty'

const PlayerList = () => {
  const isXSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  const location = useLocation()
  const match = matchPath('/players/:id', location.pathname)

  return (
    <Box display="flex">
      <List
        empty={<Empty title="players" />}
        sx={{
          flexGrow: 1,
          transition: (theme: any) =>
            theme.transitions.create(['all'], {
              duration: theme.transitions.duration.enteringScreen
            }),
          marginRight: !!match ? '400px' : 0
        }}
        filters={playerFilters}
        perPage={10}
        sort={{ field: 'created_utc', order: 'desc' }}>
        {isXSmall ? (
          <PlayerListMobile />
        ) : (
          <PlayerListDesktop
            selectedRow={
              !!match ? parseInt((match as any).params.id, 10) : undefined
            }
          />
        )}
      </List>
    </Box>
  )
}

export default PlayerList
