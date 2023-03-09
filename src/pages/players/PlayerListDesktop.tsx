import * as React from 'react';
import {
  Identifier,
  Datagrid,
  DateField,
  TextField,
  BooleanField
} from 'react-admin';

// import ProductReferenceField from '../products/ProductReferenceField';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
import rowStyle from './rowStyle';
// import UsernameField from '../../components/UsernameField';

export interface PlayerListDesktopProps {
  selectedRow?: Identifier;
}

const PlayerListDesktop = ({ selectedRow }: PlayerListDesktopProps) => (
  <Datagrid
    rowClick="edit"
    rowStyle={rowStyle(selectedRow)}
    optimized
    sx={{
      '& .RaDatagrid-thead': {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid'
      },
      '& .column-comment': {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }}
  >
    <DateField source="created_at" />
    <TextField source="username" />
    {/* <UsernameField /> */}
    {/* <CustomerReferenceField link={false} />
        <ProductReferenceField link={false} /> */}
    <BooleanField source="is_employee" />
    <BooleanField source="verified" />
    <BooleanField source="opted_out" />
    <BooleanField source="is_banned" />
    <DateField source="tag_time" />
  </Datagrid>
);

export default PlayerListDesktop;
