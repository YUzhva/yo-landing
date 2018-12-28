import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ChangeableText extends Component {
  state = { currentVariantIndex: 0 };

  componentDidMount() {
    if (this.props.variants.length > 1) {
      this.changeableTextInterval = setInterval(() => {
        this.setState((prevState) => ({
          currentVariantIndex: (prevState.currentVariantIndex + 1) === this.props.variants.length
            ? 0
            : prevState.currentVariantIndex + 1,
        }));
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.changeableTextInterval);
  }

  render() {
    const { highlight, variants } = this.props;
    return (
      <div className={`yo-changeable-text${highlight ? ' yo-changeable-text--highlighted' : ''}`}>
        {
          variants.length && variants.map((variant, variantIndex) => {
            const isVariantActive = this.state.currentVariantIndex === variantIndex;
            return (
              <span
                key={`yo-changeable-text-${variant}`}
                className={`yo-changeable-text__variant${isVariantActive ? ' yo-changeable-text__variant--active' : ''}`}
              >
                {variant}
              </span>
            );
          })
        }
      </div>
    );
  }
}

ChangeableText.defaultProps = {
  highlight: false,
  variants: [],
};

ChangeableText.propTypes = {
  highlight: PropTypes.bool,
  variants: PropTypes.arrayOf(PropTypes.string),
};

export default ChangeableText;
