import React from 'react';

////////////////////////////////////////////////////////////////////////////////

class Header extends React.Component {

    render() {
        return(
            <nav>
                {this.props.state.menu.map(item => {
                    return <li><a href="{ item.href }">{ item.title }</a></li>
                })}
            </nav>
        );
    }
}

export default Header;
