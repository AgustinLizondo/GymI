import { extendTheme } from 'native-base';
import Button from './Button';
import Pressable from './Pressable';
import Input from './Input';
import Text from './Text';

const theme = extendTheme({
  components: {
    Button,
    Pressable,
    Input,
    Text,
  },
});

export default theme;
