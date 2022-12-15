import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
    title: string;
}

const Empty = (props: Props) => {
    const { title } = props;
    return (
        <Box textAlign="center" m={1}>
            <Typography variant="h4" paragraph>
                `No ${title} available`
            </Typography>
        </Box>
    )
};

export default Empty;