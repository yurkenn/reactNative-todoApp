import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#DAF7A6',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#FFC300',
    opacity: 0.4,
    borderRadius: 15,
    marginRight: 15,
  },
  itemText: {
    color: 'black',
    fontSize: 15,
  },

  toggleUp: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
});

export default styles;
