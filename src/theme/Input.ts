const defaultProps = {
  variant: 'outline',
  padding: 2,
  fontSize: 'md',
};

const outline = {
  borderColor: 'primary.500',
  borderWidth: 1,
};

const Button = {
  defaultProps,
  variants: {
    outline,
  },
};

export default Button;
