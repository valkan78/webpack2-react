import React from 'react';
import Header from 'components/Header.jsx';

////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            title: "Main Title",
            menu: [
                {title: 'Main', href: '/'},
                {title: 'About', href: '/about'},
                {title: 'Projects', href: '/projects'},
                {title: 'Contacts', href: '/contacts'},
            ]
        }
    }

    render() {
        return (
            <div>
                <Header state={this.state} />
            </div>
        )
    }
}

////////////////////////////////////////////////////////////////////////////////

export default App;
