const defaultProps = {
  variant: 'solid',
};

const solid = {
  _pressed: {
    opacity: 0.5,
  },
};

const Pressable = {
  defaultProps,
  variants: {
    solid,
  },
};

export default Pressable;
