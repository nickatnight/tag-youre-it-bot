import React, { CSSProperties } from 'react'
import { useGetList } from 'react-admin'
import { useMediaQuery, Theme } from '@mui/material'

import TotalPlayers from './TotalPlayers'
import Welcome from './Welcome'

import { Player } from '../../types'

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { flex: 1, marginLeft: '0.5em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' }
}

const Spacer = () => <span style={{ width: '1em' }} />
const VerticalSpacer = () => <span style={{ height: '1em' }} />

const Dashboard = () => {
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const { data: players } = useGetList<Player>('players', {
    // filter: { date_gte: aMonthAgo.toISOString() },
    // sort: { field: 'date', order: 'DESC' },
    pagination: { page: 1, perPage: 50 }
  })
  return isXSmall ? (
    <div>
      <div style={styles.flexColumn as CSSProperties}>
        <Welcome />
        {/* <MonthlyRevenue value={revenue} /> */}
        <VerticalSpacer />
        <TotalPlayers value={players?.length.toString()} />
        <VerticalSpacer />
        {/* <PendingOrders orders={pendingOrders} /> */}
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn as CSSProperties}>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
      <div style={styles.flex}>
        <TotalPlayers value={players?.length.toString()} />
        <Spacer />
        {/* <NbNewOrders value={nbNewOrders} /> */}
      </div>
      <div style={styles.singleCol}>
        {/* <OrderChart orders={recentOrders} /> */}
      </div>
      <div style={styles.singleCol}>
        {/* <PendingOrders orders={pendingOrders} /> */}
      </div>
    </div>
  ) : (
    <>
      <Welcome />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <TotalPlayers value={players?.length.toString()} />
            <Spacer />
            {/* <NbNewOrders value={nbNewOrders} /> */}
          </div>
          <div style={styles.singleCol}>
            {/* <OrderChart orders={recentOrders} /> */}
          </div>
          <div style={styles.singleCol}>
            {/* <PendingOrders orders={pendingOrders} /> */}
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            {/* <PendingReviews /> */}
            <Spacer />
            {/* <NewCustomers /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
