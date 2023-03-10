import * as React from 'react';
import { Box, useMediaQuery, Theme } from '@mui/material';
import {
  ExportButton,
  FilterButton,
  FilterForm,
  FilterContext,
  ListBase,
  Pagination,
  SortButton,
  Title,
  TopToolbar,
  useGetResourceLabel
} from 'react-admin';

import ImageList from './GridList';

const SubredditList = () => {
  const getResourceLabel = useGetResourceLabel();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'));
  return (
    <ListBase perPage={12} sort={{ field: 'display_name', order: 'ASC' }}>
      <Title defaultTitle={getResourceLabel('subreddits', 2)} />
      <FilterContext.Provider value={productFilters}>
        <ListActions isSmall={isSmall} />
        {isSmall && (
          <Box m={1}>
            <FilterForm />
          </Box>
        )}
      </FilterContext.Provider>
      <Box display="flex">
        {/* <Aside /> */}
        <Box width={isSmall ? 'auto' : 'calc(100% - 16em)'}>
          <ImageList />
          <Pagination rowsPerPageOptions={[12, 24, 48, 72]} />
        </Box>
      </Box>
    </ListBase>
  );
};

export const productFilters = [];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <SortButton fields={['display_name', 'subscribers']} />
    <ExportButton />
  </TopToolbar>
);

export default SubredditList;
