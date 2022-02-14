import React, {useState} from 'react';
import TasksListView from './TasksListView';

const initialTasks = [
  {
    id: `${Math.random()}`,
    title: 'Preparar clase',
    isCompleted: true,
  },
  {
    id: `${Math.random()}`,
    title: 'Preparar ejercicios',
    isCompleted: true,
  },
  {
    id: `${Math.random()}`,
    title: 'Mandar resumen',
    isCompleted: false,
  },
];

export default function TasksList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [inputValue, setInputValue] = useState('');

  function onChangeText(text) {
    setInputValue(text);
  }

  function addTask() {
    setTasks(function (currentTasks) {
      return [
        ...currentTasks,
        {
          title: inputValue,
          isCompleted: false,
          id: Math.random(),
        },
      ];
    });
    setInputValue('');
  }

  function deleteTask(id) {
    setTasks(function (currentTasks) {
      return currentTasks.filter(task => task.id !== id);
    });
  }

  function completeTask(id) {
    setTasks(function (currentTasks) {
      return currentTasks.map(function (task) {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: true,
          };
        }
        return task;
      });
    });
  }

  return (
    <TasksListView
      onChangeText={onChangeText}
      inputValue={inputValue}
      tasks={tasks}
      deleteTask={deleteTask}
      completeTask={completeTask}
      addTask={addTask}
    />
  );
}
