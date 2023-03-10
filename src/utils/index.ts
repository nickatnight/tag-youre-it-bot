
export const getApiUrl = (): string => {
    let BASE_URL = 'http://localhost:8666/v1';

    switch(process.env.NODE_ENV) {
        case 'production':
            BASE_URL = 'https://api.tagyoureitbot.com/v1';
            break
    }

    return BASE_URL
};
