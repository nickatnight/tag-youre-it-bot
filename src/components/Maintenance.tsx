import * as React from 'react';

const maintenanceStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: "url('underconstruction.jpg')",
  backgroundSize: 'cover'
};

const Maintenance = (): JSX.Element => {
  return <div style={maintenanceStyle}></div>;
};

export default Maintenance;
