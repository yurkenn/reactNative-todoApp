import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Task.style';

const Task = ({text}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          onPress={() => setToggle(!toggle)}
          style={styles.square}
        />

        <Text style={[styles.itemText, toggle && styles.toggleUp]}>{text}</Text>
      </View>
    </View>
  );
};

export default Task;
