let React = require('react');
let { PropTypes } = React;

// Used to cancel events.
let preventDefault = e => e.preventDefault();

class Pagination extends React.Component {

    shouldComponentUpdate(nextProps) {
        let props = this.props;
        return props.pageIndex !== nextProps.pageIndex ||
            props.pageSize !== nextProps.pageSize ||
            props.itemsCount !== nextProps.itemsCount;
    }

    onChangePage(pageIndex, event) {
        event.preventDefault();
        this.props.onChangePage(pageIndex + 1);
    }

    render() {
        let {pageIndex, pageSize, itemsCount, showPages} = this.props;
        pageIndex = pageIndex - 1;
        let totalPages = Math.ceil(itemsCount / pageSize);

        if (totalPages === 0) {
            return null;
        }

        let diff = Math.floor(showPages / 2);
        let start = Math.max(pageIndex - diff, 0);
        let end = Math.min(start + showPages, totalPages);

        if (totalPages >= showPages && end >= totalPages) {
            start = totalPages - showPages;
        }

        let buttons = [];
        let btnEvent;
        let isCurrent;
        for (let i = start; i < end; i++) {
            isCurrent = pageIndex === i;
            // If the button is for the current page then disable the event.
            if (isCurrent) {
                btnEvent = preventDefault;
            } else {
                btnEvent = this.onChangePage.bind(this, i);
            }
            buttons.push(
                <li key={i} className={isCurrent ? 'active' : null}>
                    <a role="button" href="#" onClick={btnEvent} tabIndex="0">
                        <span>{i + 1}</span>
                        {isCurrent ?
                            <span className="sr-only">(current)</span> : null}
                    </a>
                </li>
            );
        }

        // First and Prev button handlers and class.
        let firstHandler = preventDefault;
        let prevHandler = preventDefault;
        let isNotFirst = pageIndex > 0;
        if (isNotFirst) {
            firstHandler = this.onChangePage.bind(this, 0);
            prevHandler = this.onChangePage.bind(this, pageIndex - 1);
        }

        // Next and Last button handlers and class.
        let nextHandler = preventDefault;
        let lastHandler = preventDefault;
        let isNotLast = pageIndex < totalPages - 1;
        if (isNotLast) {
            nextHandler = this.onChangePage.bind(this, pageIndex + 1);
            lastHandler = this.onChangePage.bind(this, totalPages - 1);
        }

        return (
            <div>
                <ul className={this.props.className} aria-label="Pagination">
                    <li className={!isNotFirst ? 'disabled' : null}>
                        <a role="button" href="#" tabIndex="0"
                           onClick={firstHandler}
                           aria-disabled={!isNotFirst}
                           aria-label="First">
                            首页
                        </a>
                    </li>
                    <li className={!isNotFirst ? 'disabled' : null}>
                        <a role="button" href="#" tabIndex="0"
                           onClick={prevHandler}
                           aria-disabled={!isNotFirst}
                           aria-label="Previous">
                            <span className="fa fa-angle-double-left" aria-hidden="true"/>
                        </a>
                    </li>
                    {buttons}
                    <li className={!isNotLast ? 'disabled' : null}>
                        <a role="button" href="#" tabIndex="0"
                           onClick={nextHandler}
                           aria-disabled={!isNotLast}
                           aria-label="Next">
                            <span className="fa fa-angle-double-right" aria-hidden="true"/>
                        </a>
                    </li>
                    <li className={!isNotLast ? 'disabled' : null}>
                        <a role="button" href="#" tabIndex="0"
                           onClick={lastHandler}
                           aria-disabled={!isNotLast}
                           aria-label="Last">
                            尾页
                        </a>
                    </li>
                </ul>
        <span style={{
          display: 'inline-block',
          padding: '27px 10px'
        }}>共 {totalPages} 页</span>
            </div>
        );
    }
}

Pagination.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    pageIndex: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    showPages: PropTypes.number
};

Pagination.defaultProps = {
    showPages: 6
};

export default Pagination;
