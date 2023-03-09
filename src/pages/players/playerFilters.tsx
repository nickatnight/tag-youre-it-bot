import * as React from 'react';
import { SearchInput, BooleanInput } from 'react-admin';

const playerFilters = [
  <SearchInput source="q" alwaysOn />,
  <BooleanInput source="is_banned" />,
  <BooleanInput source="opted_out" />,
  <BooleanInput source="verified" />,
  <BooleanInput source="is_employee" />
];

export default playerFilters;
