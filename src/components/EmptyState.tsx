import React from 'react';
import { View } from 'react-native';
import { Heading, Text } from '@gluestack-ui/themed';

const EmptyState: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center mx-8 my-16">
      <Heading size="xl" style={{ color: '#9ca3af', marginBottom: 8, textAlign: 'center' }}>
        Nenhuma tarefa encontrada
      </Heading>
      <Text style={{ color: '#9ca3af', textAlign: 'center', fontSize: 16 }}>
        Adicione uma nova tarefa para começar.
      </Text>
    </View>
  );
};

export default EmptyState;
