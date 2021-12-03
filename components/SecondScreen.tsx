import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SecondScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={style.container}>
      <Text>Screen 2</Text>
      <Button title="close" onPress={() => navigation.goBack()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
