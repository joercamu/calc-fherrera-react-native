import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const CounterScreen = () => {
    const [count, setcount] = useState(10);
    return (
        <View
            style={{ flex: 1, justifyContent: 'center' }}
        >
            <Text
                style={{ fontSize: 45, textAlign: 'center' }}
            >Contador: {count}</Text>
            <Button title='click' onPress={() => setcount(count + 1)} />
        </View>
    );
};
