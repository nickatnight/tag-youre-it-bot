import * as React from 'react';
import { Layout as RaLayout, LayoutProps } from 'react-admin';
import AppBar from './AppBar';

const Layout = (props: LayoutProps) => {
  return <RaLayout {...props} appBar={AppBar} />;
};
export default Layout;
