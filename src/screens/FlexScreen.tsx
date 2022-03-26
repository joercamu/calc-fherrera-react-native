import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>FlexBox1</Text>
      <Text style={styles.box2}>FlexBox2</Text>
      <Text style={styles.box3}>FlexBox3</Text>
      {/* <Text style={styles.box}>FlexBox1</Text>
      <Text style={styles.box2}>FlexBox2</Text>
      <Text style={styles.box3}>FlexBox3</Text> */}

    </View>
  );
};
// Conceptos:
// FlexDirection: estable el tipo de direccion de los items hijos
// JustifyCOntent: ordena los elementos dependiendo el direccionamiento
// AllignItem: estable un orden a los hijos de su espacio el en contenedor padre
// AlligSelf: estable un orden al hijo sin importar el comportamiento heredado
// FlexWrap: ordena los elementos para evitar el desbordamiento.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:600,
    // flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',

    backgroundColor: '#28C4D9',
    // flexWrap:'wrap'
  },

  box: {
    // flex: 1,
    // alignSelf:'center',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 25,
  },
  box2: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 25,
  },
  box3: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 25,
  },
});
