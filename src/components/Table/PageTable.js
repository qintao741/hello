import React, {Component} from 'react';
import Table from './Table';
import Pagination from './Pagination';

class PageTable extends Component {
    getSelectedRows() {
        return this.refs.table.getCheckedRows();
    }

    reset() {
        this.refs.table.reset();
    }

    render() {
        const {dataArray, columns, onChangePage, pageInfo, noDataText, checkable, onCheck} = this.props;
        return (
            <div className="row">
                <Table
                    ref="table"
                    checkable={checkable}
                    onCheck={onCheck}
                    keys={'id'}
                    className='table table-striped table-bordered table-hover'
                    dataArray={dataArray} columns={columns}
                    noDataText={noDataText}/>

                <div className="row">
                    <div className="col-xs-24">
                        <Pagination
                            className="pagination pull-left"
                            pageIndex={pageInfo.pageIndex}
                            pageSize={pageInfo.pageSize}
                            itemsCount={pageInfo.itemCount}
                            onChangePage={onChangePage}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default PageTable;
