import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const FirstScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={style.container}>
      <Text>Screen 1</Text>
      <Button title="open" onPress={() => navigation.navigate('screen2')} />
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
