import { IPressableProps } from 'native-base';
import { Client } from '../../stores/types/clientTypes';

export interface ClientItemProps extends Client, Omit<IPressableProps, 'id'> {
  onPress: () => void;
}
