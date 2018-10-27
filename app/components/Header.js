var React = require('react');

var Header = React.createClass({
    render: function() {
        return(
            <div className="header">
                    <div className="header__buttons">
                    <a className="nav__button" href="#/search">Search</a>
                        <a className="nav__button" href="#/saved">Saved</a></div>
                    <div className="header__center">
                        <img className="header__logo" src="./assets/img/nyt-logo.png" />
                    </div>
                    <div className="nav__directions">
                        <a className="prebuilt__search">Search and save articles from the New York Times</a>
                    </div>
            </div>
        );
    }
});

module.exports = Header;
