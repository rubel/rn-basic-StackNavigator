import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="About US"
        onPress={() => {
          nav.navigate('About');
        }}
      />
    </View>
  );
}
