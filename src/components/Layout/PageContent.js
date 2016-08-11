import React from 'react';

let PageContent = React.createClass({
    render() {
        return (
            <div className='page-content'>
                <div className='page-content-area' style={{marginBottom: '55px'}}>
                    <div className="page-header">
                        <h1>
                            {this.props.header}
                            <small>
                                <i className="ace-icon fa fa-angle-double-right"></i>
                                {this.props.subTitle}
                            </small>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-xs-24">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PageContent;
