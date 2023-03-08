
import * as React from 'react';
import PeopleIcon from '@mui/icons-material/People';

import CardWithIcon from '../../components/CardWithIcon';

interface Props {
    value?: string;
}

const TotalPayers = (props: Props) => {
    const { value } = props;

    return (
        <CardWithIcon
            to="/players"
            icon={PeopleIcon}
            title='Total Players'
            subtitle={value}
        />
    );
};

export default TotalPayers;
