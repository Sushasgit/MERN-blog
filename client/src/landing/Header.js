import React from 'react';
import Icon from '../ui/Icon';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__links">
                    <a href="/">menu</a>
                    <a className="header__logo" href="/">
                        Blog 
                        <Icon name="pow" />
                    </a>
                    <button className="header__search">
                        <Icon name="search" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;