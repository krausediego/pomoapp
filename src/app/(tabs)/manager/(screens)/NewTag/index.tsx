import React from 'react';
import { Text, View } from 'react-native';

import { StackHeader } from '@/components';

const NewTagScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StackHeader />
      <Text>New Tag</Text>
    </View>
  );
};

export default NewTagScreen;
