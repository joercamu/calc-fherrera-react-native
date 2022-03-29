import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';

interface Props {
  text: string;
  ancho?: boolean;
  action: (text: string) => void;
  color?: string;
}
export const ButtonCalComponent = ({
  text,
  ancho,
  action,
  color = '#2D2D2D',
}: Props) => {
  return (
    <View
      style={{
        ...styles.buttonContainer,
        width: ancho ? 180 : 80,
        backgroundColor: color,
      }}>
      <TouchableOpacity
        onPress={() => {
          console.log(text);
          action(text);
        }}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 35,
  },
});
