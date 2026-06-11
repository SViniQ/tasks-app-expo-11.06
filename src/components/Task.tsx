import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

interface TaskProps {
  text: string;
  updateMode: () => void;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ text, updateMode, deleteTask }) => {
  return (
    <View className="bg-white rounded-xl shadow mt-4 px-8 py-6 flex-row items-center justify-between">
      <Text className="text-gray-800 text-base flex-1">{text}</Text>
      <View className="flex-row gap-4 ml-4">
        <TouchableOpacity className="p-0.5" onPress={updateMode}>
          <Feather name="edit" size={20} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity className="p-0.5" onPress={deleteTask}>
          <AntDesign name="delete" size={20} color="#374151" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
