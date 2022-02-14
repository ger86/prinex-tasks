import React from 'react';
import {SafeAreaView} from 'react-native';
import TasksList from './components/TasksList';

export default function App() {
  return (
    <SafeAreaView>
      <TasksList />
    </SafeAreaView>
  );
}
