import {View, Text, Button} from 'react-native';
import React from 'react';

export default function AboutScreen({navigation}) {
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}
