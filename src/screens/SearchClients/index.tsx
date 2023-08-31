import React, {
  useEffect,
  useState,
} from 'react';

// UI
import {
  Icon,
  Input,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

// Components
import MainBox from '../../components/MainBox';
import Header from '../../components/Header';
import ClientItem from '../../components/ClientItem';

// State
import { GlobalState } from '../../stores/types';

// Actions
import clientsActions from '../../stores/slices/clientsSlice';

// Utils
import { apiDataFormatter } from '../../utils/api';
import { useDebounceValue } from '../../hooks/useDebounceValue';
import { useDispatch, useSelector } from 'react-redux';

// Types
import { SearchClientsProps } from './types';
import { Client } from '../../stores/types/clientTypes';

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
  } = useSelector((state: GlobalState) => state.clients);

  const debouncedValue = useDebounceValue(search);

  const onBackPress = () => navigation.goBack();

  useEffect(() => {
    dispatch(clientsActions.getClients({
      name: debouncedValue,
    }));
  }, [debouncedValue]);

  const renderItem = (props: { item: Client }) => {

    const onPress = () => onClientItemPress(props.item);

    return (
      <ClientItem
        onPress={onPress}
        marginBottom={2}
        {...props.item}
      />
    );};

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
        keyExtractor={(item: Client) => item.id?.toString()}
      />
    </MainBox>
  );};

export default SearchClientsScreen;
