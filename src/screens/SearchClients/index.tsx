import React, {
  useEffect,
  useState,
} from 'react';

// UI
import {
  Button,
  Icon,
  Input,
  Text,
  View,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

// Components
import MainBox from '../../components/MainBox';
import Header from '../../components/Header';
import ClientItem from '../../components/ClientItem';

// State
import { useDispatch, useSelector } from '../../stores/hooks';
import clientsActions from '../../stores/slices/clientsSlice';

// Utils
import { apiDataFormatter } from '../../utils/api';
import { useDebounceValue } from '../../hooks/useDebounceValue';

// Types
import { SearchClientsProps } from './types';
import { Client } from '../../stores/types/clientTypes';

// Styles
import styles from './styles';

const SearchClientsScreen = (props: SearchClientsProps) => {

  const {
    navigation,
    route: {
      params: {
        onClientItemPress,
      },
    },
  } = props;

  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {
    clients,
  } = useSelector((state) => state.clients);

  const debouncedValue = useDebounceValue(search);

  const onBackPress = () => navigation.goBack();
  const onAddClientPress = () => navigation.navigate('AddClient');

  useEffect(() => {
    dispatch(clientsActions.getClients({
      name: debouncedValue,
    }));
  }, [dispatch, debouncedValue]);

  const renderItem = (props: { item: Client }) => {
    const onPress = () => onClientItemPress(props.item);

    return (
      <ClientItem
        onPress={onPress}
        marginBottom={2}
        {...props.item}
      />
    );
  };

  const renderEmptyComponent = () => (
    <View
      style={styles.emptyComponentContainer}
    >
      <Text>
        No clients were added yet
      </Text>
      <Button
        variant="link"
        onPress={onAddClientPress}
      >
        Add one now!
      </Button>
    </View>
  );

  return (
    <MainBox>
      <Header
        onBackPress={onBackPress}
        screenName="Search"
      />
      <Input
        marginY={4}
        value={search}
        onChangeText={setSearch}
        placeholder="Search"
        leftElement={<Icon
          marginLeft={2}
          as={Feather}
          size={6}
          name="search"
          color="gray.400"
        />}
      />
      <FlashList
        data={apiDataFormatter(clients)}
        renderItem={renderItem}
        estimatedItemSize={66}
        ListEmptyComponent={renderEmptyComponent}
        keyExtractor={(item: Client) => item.id?.toString()}
      />
    </MainBox>
  );};

export default SearchClientsScreen;
