import * as React from 'react';
import { SearchInput, BooleanInput } from 'react-admin';

const playerFilters = [
  <SearchInput key="search" source="q" alwaysOn />,
  <BooleanInput key="is_banned" source="is_banned" />,
  <BooleanInput key="opted_out" source="opted_out" />,
  <BooleanInput key="verified" source="verified" />,
  <BooleanInput key="is_employee" source="is_employee" />
];

export default playerFilters;
