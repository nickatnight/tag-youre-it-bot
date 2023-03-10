import * as React from 'react';
import { Layout as RaLayout, type LayoutProps } from 'react-admin';
import AppBar from './AppBar';

const Layout = (props: LayoutProps): JSX.Element => {
  return <RaLayout {...props} appBar={AppBar} />;
};
export default Layout;
