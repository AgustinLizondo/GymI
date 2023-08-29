import React from 'react';

// UI
// import { View, Text } from 'native-base';

// Components
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';
import MainBox from '../../components/MainBox';

// Types
import { HomeProps } from './types';

// Styles

const HomeScreen = ({ navigation }: HomeProps) => (
  <MainBox>
    <Header
      screenName="Home"
      userName="John Doe"
      onBackPress={() => navigation.goBack()}
      onAvatarPress={() => console.log('Profile')}
    />
    <Transaction
      transaction={{
        transactor: 'John Doe',
        amount: 3500,
        date: '2021-08-01',
      }}
    />
  </MainBox>
);

export default HomeScreen;
