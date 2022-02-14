import React from 'react';
import {TextInput, Text, TouchableOpacity, View, Button} from 'react-native';

const style = {
  paddingHorizontal: 16,
  paddingVertical: 16,
};

const titleStyle = {
  fontSize: 32,
  fontWeight: 'bold',
  marginBottom: 16,
};

const addBtnStyle = {
  backgroundColor: 'blue',
  color: 'white',
};

const inputStyle = {
  borderColor: 'black',
  borderWidth: 1,
  marginBottom: 16,
};

export default function TasksListView({
  tasks,
  inputValue,
  onChangeText,
  addTask,
  deleteTask,
  completeTask,
}) {
  return (
    <View style={style}>
      <Text style={titleStyle}>Lista de tareas</Text>
      <View>
        <TextInput
          style={inputStyle}
          onChangeText={onChangeText}
          value={inputValue}
        />
        <TouchableOpacity onPress={addTask} style={addBtnStyle}>
          <Text>Añadir tarea</Text>
        </TouchableOpacity>
      </View>
      <View>
        {tasks.map(task => (
          <View key={task.id}>
            <Text>{`${task.title} ${
              task.isCompleted ? 'Completada' : 'Pendiente'
            }`}</Text>
            {!task.isCompleted && (
              <Button
                title="Completar tarea"
                onPress={function () {
                  completeTask(task.id);
                }}
              />
            )}
            <Button
              title="Borrar tarea"
              onPress={function () {
                deleteTask(task.id);
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
