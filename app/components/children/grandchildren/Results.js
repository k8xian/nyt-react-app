var React = require('react');

var Result = require('./greatgrandchildren/Result');

var Results = React.createClass({
    render: function render() {
        return(
            <div>
                <h1 className="result__type">Results</h1>
                <div className="result__container">
                    {this.props.results.map(function(article, i) {
                        return (
                            <Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={false}/>
                        );
                    })}
                </div>
            </div>
        )
    }
});

module.exports = Results;