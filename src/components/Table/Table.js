import React, {PropTypes as T} from 'react';

/**
 * 帮助方法，这两个方法是用来根据每行的数据，生成 <tr key={id} /> 的 id
 * key 或者 keys，是 column 对应的 KEY，也是 data 对应的 KEY 名，通过这个来绑定 header 和 row 的值
 * data 就是需要解析出的数据，一般就是 table 的一行
 * */

const getKey = (data, key) => {
    if (data[key] === undefined || data[key] === null) {
        if (data.cid) return data.cid;
        data.cid = Math.random().toString(36).substr(2, 5);
        return data.cid
    } else {
        return data[key];
    }
};

const simpleGet = key => data => getKey(data, key);
const keyGetter = keys => data => keys.map(key => getKey(data, key));
const isEmpty = value => value === undefined || value === null || value === '';

/**
 * 核心方法，构建 Cell
 * - prop           即为 column 对应的 KEY
 * - defaultContent 为指定的默认内容
 * - render         可以让 cell render 其他 html 标签
 * */
const getCellValue = ({ prop, defaultContent, renderCell }, row, idx) => {
    let rtv;
    if (!isEmpty(prop) && isEmpty(row[prop])) {
        rtv = defaultContent;
    } else if (renderCell) {
        rtv = renderCell(row[prop], row, idx);
    } else {
        rtv = row[prop];
    }
    return rtv;
};

const getCellClass = ({ prop, className }, row) => {
    let rtv;
    if (!isEmpty(prop) && isEmpty(row[prop])) {
        rtv = 'empty cell';
    } else if (typeof className === 'function') {
        rtv = className(row[prop], row);
    } else {
        rtv = className;
    }
    return rtv;
};

const removeFromArray = (array, i) => {
    for (let k = 0; k < array.length; k++) {
        if (i === array[k]) {
            array.splice(k, 1);
        }
    }
};

class Table extends React.Component {

    constructor() {
        super();
        this.state = {checked: []};
    }

    componentDidMount() {
        // If no width was specified, then set the width that the browser applied
        // initially to avoid recalculating width between pages.
        for (let i = 0; i < this.props.columns.length; i++) {
            let thDom = this.refs[`th-${i}`];
            if (!thDom.style.width) {
                // thDom.style.width = `${thDom.offsetWidth}px`;
            }
        }
    }

    _checkAll() {
        if (this.state.checked.length === this.props.dataArray.length) {
            this.state.checked=[];
            this.setState( this.state);
        } else {
            let {dataArray} = this.props;
            let array = [];
            dataArray.map((row, i) => {
                array.push(i);
            });
            this.state.checked=array;
            this.setState(this.state);
        }
        if (this.props.onCheckAll) {
            if(this.state.checked.length){
                this.props.onCheckAll(this.props.dataArray.concat());
            }else{
                this.props.onCheckAll([].concat());
            }
        }
    }


    _onRowChecked(i) {
        let array = this.state.checked;
        if (array.indexOf(i) > -1) {
            removeFromArray(array, i);
        } else {
            array.push(i);
        }
        this.setState({checked: array});
        if (this.props.onCheck) {
            this.props.onCheck(this.props.dataArray[i]);
        }
    }

    getCheckedRows() {
        let array = [];
        this.props.dataArray.map((row, i)=> {
            if (this.state.checked.indexOf(i) > -1) {
                array.push(row);
            }
        });

        return array;
    }

    reset() {
        this.setState({checked: []});
    }

    render() {
        let {className, columns, dataArray, keys, checkable} = this.props;
        dataArray = dataArray === undefined ? [] : dataArray;
        let getCheckHeader = () => {
            if (checkable && dataArray.length > 0) {
                return (
                    <th classNameName="center">
                        <label className="position-relative">
                            <input type="checkbox" className="ace"
                                   checked={this.state.checked.length === dataArray.length}
                                   onChange={this._checkAll.bind(this)}/>
                            <span className="lbl"></span>
                        </label>
                    </th>
                )
            }
        };
        let getCheckRows = (i) => {
            if (checkable) {
                return (
                    <td classNameName="center">
                        <label className="position-relative">
                            <input type="checkbox" className="ace"
                                   checked={this.state.checked.indexOf(i) > -1}
                                   onChange={(e) => this._onRowChecked(i)}/>
                            <span className="lbl"></span>
                        </label>
                    </td>
                )
            }
        };
        let headers = columns.map((col, idx) => {
            return (
                <th
                    ref={`th-${idx}`}
                    key={idx}
                    style={{width: col.width,backgroundColor:col.backgroundColor}}
                    role="columnheader"
                    scope="col">
                    <span>{col.title}</span>
                </th>
            );
        });
        let getKeys = Array.isArray(keys) ? keyGetter(keys) : simpleGet(keys);
        let rows = dataArray.map((row, idx) => {
            let key = getKeys(row);
            return (
                <tr key={key}>
                    {getCheckRows(idx)}
                    {columns.map(
                        (col, i) =>
                            <td key={i} className={getCellClass(col, row)} style={{backgroundColor:row.backgroundColor}}>
                                {getCellValue(col, row, idx)}
                            </td>
                    )}
                </tr>
            );
        });
        return (
            <table className={className}>
                <thead>
                <tr>
                    {getCheckHeader()}
                    {headers}
                </tr>
                </thead>
                <tbody>
                {rows.length > 0 ? rows :
                    (<tr>
                        <td colSpan={this.props.emptyView === undefined ? columns.length : columns.length - 1}
                            className="text-center">{this.props.noDataText || '没有数据'}</td>
                        {this.props.emptyView === undefined ? undefined : <td>{this.props.emptyView}</td>}
                    </tr>)}
                {this.props.children}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    className: T.string,

    columns: T.arrayOf(T.shape({
        title: T.string.isRequired,
        prop: T.oneOfType([
            T.string,
            T.number
        ]),
        renderCell: T.func,
        defaultContent: T.string,
        width: T.oneOfType([
            T.string,
            T.number
        ]),
        className: T.oneOfType([
            T.string,
            T.func
        ])
    })).isRequired,

    dataArray: T.oneOfType([
        T.array,
        T.object
    ]).isRequired,

    keys: T.oneOfType([
        T.arrayOf(T.string),
        T.string
    ]),

    noDataText: T.string,

    emptyView: T.object,

    checkable: T.bool
};

export default Table;
