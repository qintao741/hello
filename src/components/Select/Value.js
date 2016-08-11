/*eslint-disable */

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

  blockEvent: function(event) {
    event.stopPropagation();
  },

  handleOnRemove: function(event) {
    if (!this.props.disabled) {
      this.props.onRemove(event);
    }
  },

  render: function() {
    var text = this.props.option.text;
    if (this.props.renderer) {
      text = this.props.renderer(this.props.option);
    }

    if (this.props.optionLabelClick) {
      text = (
        <a className="Select-item-label__a"
           onMouseDown={this.blockEvent}
           onTouchEnd={this.props.onOptionLabelClick}
           onClick={this.props.onOptionLabelClick}>
          {text}
        </a>
      );
    }

    return (
      <div className="Select-item">
				<span className="Select-item-icon"
              onMouseDown={this.blockEvent}
              onClick={this.handleOnRemove}
              onTouchEnd={this.handleOnRemove}>&times;</span>
        <span className="Select-item-label">{text}</span>
      </div>
    );
  }

});

module.exports = Value;
