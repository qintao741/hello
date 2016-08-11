import React from 'react';

let Column = React.createClass({
    render() {
        let {width,offset} = this.props;

        return (
            <div className={`col-md-${width} col-sm-${width} col-xs-${width} col-mo-${width} col-md-offset-${offset} col-mo-offset-${offset}`} {...this.props}>
                {this.props.children}
            </div>
        );
    }
});

export default Column;
