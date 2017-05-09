import React, { Component } from 'react';
import YoutubeApi from '../api/youtube';

class SearchBar extends Component {

    state = {
        term: 'Hi there!'
    }

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState((prevState, props) => ({
            term: value
        }));
    }

    handleButtonClick(e) {
        this.props.onSearchTermChanged(this.state.term);
    }

    render() {
        return (
            <div className="field has-addons searchbar">
                <p className="control is-expanded">
                    <input
                        className="input is-medium is-fullwidth" 
                        value={this.state.term} 
                        onChange={this.handleInputChange} 
                    />
                </p>
                <p className="control">
                    <button className="button is-medium is-dark" onClick={this.handleButtonClick}>Get Videos</button>
                </p>
            </div>
        )
    }

}

export default SearchBar;