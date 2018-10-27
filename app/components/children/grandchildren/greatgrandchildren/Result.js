var React = require('react');

var helpers = require('../../../utils/helpers');

var Result = React.createClass({
    getInitialState: function() {
        if (this.props.savedPage) {
            return {
                buttonText: 'remove',
                saved: true,
                button: 'remove__button'
            };
        } else {
            return {
                buttonText: 'save',
                saved: false,
                button: 'info__button'
            };
        }

    },
    handleClick: function() {
        if (this.state.saved) {
            this.setState({
                buttonText: 'save',
                saved: false,
                button: 'info__button'
            });
            helpers.deleteSaved(this.props.articleID);

        } else {
            this.setState({
                buttonText: 'remove',
                saved: true,
                button: 'remove__button'
            });
            helpers.postSaved({
                url: this.props.url,
                title: this.props.title,
                date: this.props.date,
                articleID: this.props.articleID
            });
        }
    },
    render: function render() {
        return(
            <div className="article__card" id={this.props.articleID}>
                <div className="article__content">
                    <a href={this.props.url} className="black-text"><h5>{this.props.title}</h5></a>
                    <p className="published__date">Published {this.props.date}</p>
                </div>
                <div className="panel-footer">
                    <button className={this.state.button} onClick={this.handleClick}>{this.state.buttonText} <span className={this.state.glyphicon}/> </button>
                </div>
            </div>
        )
    }
});

module.exports = Result;