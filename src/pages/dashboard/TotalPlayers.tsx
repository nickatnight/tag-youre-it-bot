
import * as React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const TotalPayers = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/commands"
            icon={PeopleIcon}
            title={translate('Total Players')}
            subtitle={value}
        />
    );
};

export default TotalPayers;
