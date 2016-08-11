import React from 'react';
import cx from 'classnames';
import Table from '../Table/Table';

let UploadResult = React.createClass({

    render() {
        const {totalNum, successNum, failureNum, failureList, key, columns} = this.props;
        let clazz = cx('alert alert-block', {
            'alert-warning': (successNum > 0 && failureNum > 0) || (successNum + failureNum) === 0,
            'alert-success': successNum > 0 && failureNum === 0,
            'alert-danger': successNum === 0 && failureNum > 0
        });
        return (
            <div>
                <div className='row' style={{'display': totalNum >= 0 ? 'block' : 'none'}}>
                    <div className='col-md-10 col-md-offset-1'>
                        <div className={clazz}>
                            一共处理 <span style={{'fontWeight': 'bold'}}>{totalNum}</span> 条，
                            成功 <span style={{'fontWeight': 'bold', 'color': 'green'}}>{successNum}</span> 条，
                            失败 <span style={{'fontWeight': 'bold', 'color': 'red'}}>{failureNum}</span> 条。失败详情如下：
                        </div>
                    </div>
                </div>
                <div className='space-4'>
                </div>
                <div className='row' style={{'display': totalNum >= 0 ? 'block' : 'none'}}>
                    <div className='col-md-10 col-md-offset-1'>
                        <Table className='table table-striped table-bordered table-hover'
                               keys={key}
                               dataArray={failureList}
                               columns={columns}
                               noDataText={'无处理失败数据'}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default UploadResult;
