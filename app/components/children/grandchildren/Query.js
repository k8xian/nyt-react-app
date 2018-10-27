var React = require('react');
var ReactDOM = require('react-dom');

var Query = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {
        return {
            term: '',
            begin: '',
            end: ''
        };
    },

    // This function will respond to the user input
    handleChange: function (event) {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    },

    // When a user submits...
    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerms(this.state.term, this.state.begin, this.state.end);

        this.setState(
            {
                term: '',
                begin: '',
                end: ''
            }
        );
    },
    render: function () {
        return (
            <div className="query">
                <form onSubmit={this.handleSubmit}>
                <div className="search__bar">
                    <div className="search__block">
                        <label htmlFor="term">Keyword</label>
                        <input
                            type="text"
                            value={this.state.term}
                            id="term"
                            onChange={this.handleChange}
                            className="search__box"
                            placeholder="Search Term"
                            required
                        />
                    </div>
                    <div className="search__block">
                        <label htmlFor="begin">Start</label>
                        <input
                            type="number"
                            value={this.state.begin}
                            onChange={this.handleChange}
                            id="begin"
                            className="search__box"
                            placeholder="1998"
                        />
                    </div>
                    <div className="search__block">
                        <label htmlFor="end">End</label>
                        <input
                            id="end"
                            className="form-control"
                            placeholder="2015"
                            type="number"
                            className="search__box"
                            value={this.state.end}
                            onChange={this.handleChange}
                        />
                    </div>
                    </div>
                    <button type="submit" className="search__button">Search</button>
                </form>
            </div>
        )
    }
});

module.exports = Query;