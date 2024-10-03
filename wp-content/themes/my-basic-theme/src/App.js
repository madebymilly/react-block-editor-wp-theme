import { Component } from '@wordpress/element';
import Header from './Header';
import Footer from './Footer';
export default class App extends Component {
    state = {
        darkTheme: true,
    };
    toggleTheme = () => {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme,
        }));
    };
    render() {
        //const { darkTheme } = this.state;
        return (
            <>
					<Header />
					<div>body...</div>
					<Footer />
				</>
        );
    }
}
