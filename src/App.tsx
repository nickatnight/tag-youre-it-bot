import * as React from "react";
import { Admin, Resource, ListGuesser, CustomRoutes } from 'react-admin';
import { Route } from 'react-router';
import UserIcon from '@mui/icons-material/People';
import jsonServerProvider from 'ra-data-json-server';

import { Dashboard } from './pages/dashboard';
import { Layout } from './layout';
import { darkTheme } from './layout/themes';
import Configuration from './pages/configuration/Configuration';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
    disableTelemetry
    theme={darkTheme}
  >
    <CustomRoutes>
        <Route path="/configuration" element={<Configuration />} />
    </CustomRoutes>
    <Resource name="users" list={ListGuesser} icon={UserIcon} />
  </Admin>
);

export default App;
