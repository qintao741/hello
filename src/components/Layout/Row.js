import React from 'react';

let Row = React.createClass({
    render() {
        return (
            <div className="col-xs-24" style={{marginBottom: 20}}>
                {this.props.children}
            </div>
        );
    }
});

export default Row;
