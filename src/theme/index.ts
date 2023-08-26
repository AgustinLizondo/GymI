import { extendTheme } from 'native-base';
import colors from './Colors';
import Button from './Button';
import Pressable from './Pressable';
import Input from './Input';

const theme = extendTheme({
  colors,
  components: {
    Button,
    Pressable,
    Input,
  },
});

export default theme;
