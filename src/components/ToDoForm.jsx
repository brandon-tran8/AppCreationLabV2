import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import tasksData from '../data/tasks.json';

export default function ToDoForm({addTask}) {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleChangeText = text => {
    setInput(text);
  };

  const handlePress = () => {
    addTask(input);
    setInput('');
  };

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setInput(tasks[randomIndex]);
    }
  };

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={handleChangeText}
          value={input}
        />
        <Button title="Add" onPress={handlePress} />
      </View>
      <View style={styles.center}>
        <Button title="Generate Random Task" onPress={handleAddTask} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  center: {
    alignItems: 'center',
  },
});
