import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme, Title } from 'react-admin';

import { darkTheme, lightTheme } from '../../layout/themes';

const Configuration = () => {
  const [theme, setTheme] = useTheme();

  return (
    <Card>
      <Title title="Configuration" />
      <CardContent>
        <Box sx={{ width: '10em', display: 'inline-block' }}>Theme</Box>
        <Button
          variant="contained"
          sx={{ margin: '1em' }}
          color={theme?.palette?.mode === 'light' ? 'primary' : 'secondary'}
          onClick={() => setTheme(lightTheme)}
        >
          Light
        </Button>
        <Button
          variant="contained"
          sx={{ margin: '1em' }}
          color={theme?.palette?.mode === 'dark' ? 'primary' : 'secondary'}
          onClick={() => setTheme(darkTheme)}
        >
          Dark
        </Button>
      </CardContent>
    </Card>
  );
};

export default Configuration;
