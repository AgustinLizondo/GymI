const baseStyle = {
  rounded: 'xl',
};

const defaultProps = {
  variant: 'solid',
  _text: {
    fontSize: 'md',
  },
};

const solid = {
  _disabled: {
    bg: '#1A1A1B',
    _text: {
      color: 'white',
    },
  },
  _text: {
    fontFamily: 'Medium',
    color: 'white',
  },
  _pressed: {
    opacity: 0.5,
  },
};

const link = {
  _text: {
    fontFamily: 'Medium',
  },
  _pressed: {
    opacity: 0.5,
  },
};

const outline = {
  borderColor: 'primary.500',
  borderWidth: 2,
};

const Button = {
  baseStyle,
  defaultProps,
  variants: {
    outline,
    solid,
    link,
  },
};

export default Button;
