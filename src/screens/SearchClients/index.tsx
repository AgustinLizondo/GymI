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

// Components
import MainBox from '../../components/MainBox';
import Header from '../../components/Header';
import { FlashList } from '@shopify/flash-list';
import ClientItem from '../../components/ClientItem';

// State
import { GlobalState } from '../../stores/types';
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
    onClientItemPress, // This has to be fixed
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

  const renderItem = (props: { item: Client }) => (
    <ClientItem
      onPress={() => onClientItemPress(props.item)}
      marginBottom={2}
      {...props.item}
    />
  );

  return (
    <MainBox>
      <Header
        userName="John Doe"
        onBackPress={onBackPress}
        onAvatarPress={() => {}}
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
        keyExtractor={(item: Client) => item.id?.toString()}
      />
    </MainBox>
  );};

export default SearchClientsScreen;
