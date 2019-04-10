import React from 'react';

import {ReactComponent as Search} from './icons/search.svg';
import {ReactComponent as Pow} from './icons/pawprints.svg';
const Icon = (props) => {
    switch (props.name) {
        case 'search':
            return <Search />;
        case 'pow':
            return <Pow />;
        default:
            return null;
    }
};

export default Icon;
