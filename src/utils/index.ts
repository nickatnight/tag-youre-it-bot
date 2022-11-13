
export const getApiUrl = (): string => {
    let BASE_URL = '';

    switch(process.env.NODE_ENV) {
        case 'production':
            BASE_URL = 'https://api.tagyoureitbot.com/v2';
            break

        case 'development':
            BASE_URL = 'http://localhost:8000/v2';
            break

        case 'test':
            BASE_URL = 'http://localhost:8000/v2';
            break
    }

    return BASE_URL
};
