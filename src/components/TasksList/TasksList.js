import React, {useReducer, useState} from 'react';
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

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
function reducer(currentTasks, action) {
  if (action.type === ADD_TASK) {
    return [...currentTasks, action.task];
  } else if (action.type === DELETE_TASK) {
    return currentTasks.filter(task => task.id !== action.id);
  } else if (action.type === COMPLETE_TASK) {
    return currentTasks.map(function (task) {
      if (task.id === action.id) {
        return {
          ...task,
          isCompleted: true,
        };
      }
      return task;
    });
  }
  return currentTasks;
}

export default function TasksList() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const [inputValue, setInputValue] = useState('');

  function onChangeText(text) {
    setInputValue(text);
  }

  function addTask() {
    dispatch({
      type: ADD_TASK,
      task: {
        title: inputValue,
        isCompleted: false,
        id: Math.random(),
      },
    });
    setInputValue('');
  }

  function deleteTask(id) {
    dispatch({
      type: DELETE_TASK,
      id,
    });
  }

  function completeTask(id) {
    dispatch({
      type: COMPLETE_TASK,
      id,
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
