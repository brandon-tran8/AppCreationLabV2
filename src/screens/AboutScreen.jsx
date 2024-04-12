import React from 'react';
import {Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <Text>Welcome to the AppCreationLab!</Text>
      <Text>Brandon Tran</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </MainLayout>
  );
}

export default AboutScreen;
