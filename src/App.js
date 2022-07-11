import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task/Task';
import Input from './components/Input/Input';
const App = () => {
  const [tasktItems, setTasktItems] = useState([]);
  const [task, setTask] = useState('');
  const [counter, setCounter] = useState(0);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasktItems([...tasktItems, task]);
    setCounter(tasktItems.length + 1);

    setTask(null);
  };

  const handlePress = index => {
    Alert.alert('Do you want to delete ?', '', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => deleteTask(index)},
    ]);
  };

  const deleteTask = index => {
    let itemsCopy = [...tasktItems];
    itemsCopy.splice(index, 1);
    setTasktItems(itemsCopy);
    setCounter(tasktItems.length - 1);
  };

  return (
    <View style={styles.container}>
      {/* Todays Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Todays Tasks {counter}</Text>

        <View style={styles.items}>
          {/* This is where the thask will go */}
          {tasktItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={handlePress}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* Write a Task */}
      <Input setTask={setTask} task={task} handleAddTask={handleAddTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B5345',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC300',
    textAlign: 'center',
  },
  items: {
    marginTop: 30,
  },
});
