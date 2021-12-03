import React from 'react';
import { View, Text, Button, StyleSheet, ActionSheetIOS } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SecondScreen = () => {
  const navigation = useNavigation<any>();

  const onPressActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Option 1', 'Option 2'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => console.log(buttonIndex)
    );
  };

  return (
    <View style={style.container}>
      <Text>Screen 2</Text>
      <Button title="actionSheet" onPress={onPressActionSheet} />
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
