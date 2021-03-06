import React, { Component } from 'react';
import _ from 'lodash';

// import YoutubeApi from '../api/youtube';


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
        this.props.onSearchTermChanged(value);
    }

    handleButtonClick(e) {
        this.props.onSearchTermChanged(this.state.term);
    }

    render() {
        return (
            <div className="SearchBar">
                <p className="SearchBar__input">
                    <input
                        className="input is-medium is-fullwidth" 
                        value={this.state.term} 
                        onChange={this.handleInputChange} 
                    />
                    <button className="button is-medium is-dark" onClick={this.handleButtonClick}>Get Videos</button>
                </p>
            </div>
        )
    }

}

export default SearchBar;