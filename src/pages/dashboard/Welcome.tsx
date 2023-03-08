import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';

import publishArticleImage from '../../assets/img/welcome_illustration.svg';

const Welcome = () => {
    return (
        <Card
            sx={{
                background: theme =>
                    theme.palette.mode === 'dark'
                        ? '#535353'
                        : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

                color: '#fff',
                padding: '20px',
                marginTop: 2,
                marginBottom: '1em',
            }}
        >
            <Box display="flex">
                <Box flex="1">
                    <Typography variant="h5" component="h2" gutterBottom>
                        Welcome to the TagYoureItBot frontend website
                    </Typography>
                    <Box maxWidth="40em">
                        <Typography variant="body1" component="p" gutterBottom>
                            This is the dashboard for Reddits TagYoureItBot bot. This bot and site are still in active development. You can view status updates <a href="https://www.reddit.com/r/TagYoureItBot/comments/yi25li/tagyoureitbot_info_v22/" rel="noreferrer" target="_blank">here</a>.
                        </Typography>
                    </Box>
                    <CardActions
                        sx={{
                            padding: { xs: 0, xl: null },
                            flexWrap: { xs: 'wrap', xl: null },
                            '& a': {
                                marginTop: { xs: '1em', xl: null },
                                marginLeft: { xs: '0!important', xl: null },
                                marginRight: { xs: '1em', xl: null },
                            },
                        }}
                    >
                        <Button
                            target="_blank"
                            variant="contained"
                            href="https://api-staging.tagyoureitbot.com/docs"
                            startIcon={<HomeIcon />}
                        >
                            TagYoureItBot Api
                        </Button>
                        <Button
                            target="_blank"
                            variant="contained"
                            href="https://github.com/nickatnight/tag-youre-it-bot"
                            startIcon={<CodeIcon />}
                        >
                            Source for this site
                        </Button>
                    </CardActions>
                </Box>
                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    sx={{
                        background: `url(${publishArticleImage}) top right / cover`,
                        marginLeft: 'auto',
                    }}
                    width="16em"
                    height="9em"
                    overflow="hidden"
                />
            </Box>
        </Card>
    );
};

export default Welcome;
