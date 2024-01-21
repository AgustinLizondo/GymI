const baseStyle = {
  rounded: 'sm',
};

const defaultProps = {
  variant: 'solid',
  _text: {
    fontSize: 'md',
  },
};

const solid = {
  bg: '#3D3D3D',
  _disabled: {
    bg: '#AAAAAA',
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
    color: '#FFFFFF',
    fontFamily: 'Medium',
  },
  _pressed: {
    opacity: 0.5,
    _text: {
      color: '#FFFFFF',
    },
  },
};

const outline = {
  borderColor: '#3D3D3D',
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
