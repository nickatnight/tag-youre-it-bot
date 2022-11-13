import * as React from "react";
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router';

import { Dashboard } from './pages/dashboard';
import { Layout } from './layout';
import { lightTheme } from './layout/themes';
import Configuration from './pages/configuration/Configuration';
import restProvider from "./dataProviders/restProvider";

import players from './pages/players';
import { getApiUrl } from './utils'


const API_URL = getApiUrl()
const dataProvider = restProvider(API_URL);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
    disableTelemetry
    theme={lightTheme}
  >
    <CustomRoutes>
        <Route path="/configuration" element={<Configuration />} />
    </CustomRoutes>
    <Resource name="players" {...players} />
  </Admin>
);

export default App;
