'use strict';

var React = require('react');

var Value = React.createClass({

    displayName: 'Value',

    propTypes: {
        disabled: React.PropTypes.bool,
        onOptionLabelClick: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        option: React.PropTypes.object.isRequired,
        optionLabelClick: React.PropTypes.bool,
        renderer: React.PropTypes.func
    },

    blockEvent: function blockEvent(event) {
        event.stopPropagation();
    },

    handleOnRemove: function handleOnRemove(event) {
        if (!this.props.disabled) {
            this.props.onRemove(event);
        }
    },

    render: function render() {
        var text = this.props.option.text;
        if (this.props.renderer) {
            text = this.props.renderer(this.props.option);
        }

        if (this.props.optionLabelClick) {
            text = React.createElement(
                'a',
                { className: 'Select-item-label__a',
                    onMouseDown: this.blockEvent,
                    onTouchEnd: this.props.onOptionLabelClick,
                    onClick: this.props.onOptionLabelClick },
                text
            );
        }

        var icon;
        if (!this.props.disabled) {
            icon = React.createElement(
                'span',
                { className: 'Select-item-icon',
                    onMouseDown: this.blockEvent,
                    onClick: this.handleOnRemove,
                    onTouchEnd: this.handleOnRemove },
                '×'
            );
        }

        return React.createElement(
            'div',
            { className: 'Select-item' },
            icon,
            React.createElement(
                'span',
                { className: 'Select-item-label' },
                text
            )
        );
    }

});

module.exports = Value;