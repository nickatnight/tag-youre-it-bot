import React, { useMemo, CSSProperties } from 'react';

import TotalPlayers from './TotalPlayers';
import Welcome from './Welcome';


const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
// const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {

    return (
        <>
            <Welcome />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <TotalPlayers value="43" />
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
    );
};

export default Dashboard;
