
var React = require('react');

import {Grid,Col} from "amazeui-react";

class textContainer extends React.Component{
    render(){
        return (<div>
            <div>
                <Grid className="doc-g">
                    <Col sm={12} md={5} lg={4}>sm-12 md-5 lg-4</Col>
                    <Col sm={12} md={7} lg={8}>sm-12 md-7 lg-8</Col>
                </Grid>
            </div>
        </div>);
    }
}

export default textContainer;