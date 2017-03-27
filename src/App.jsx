import React from 'react';
import Header from 'components/Header';

////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {

    constructor() {
        super();

        this.state = {
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
                <Header />
            </div>
        )
    }
}

////////////////////////////////////////////////////////////////////////////////

export default App;
