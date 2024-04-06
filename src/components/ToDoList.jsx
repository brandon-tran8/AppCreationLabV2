import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ToDoList = ({tasks}) => {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {},
  task: {},
});
export default ToDoList;
