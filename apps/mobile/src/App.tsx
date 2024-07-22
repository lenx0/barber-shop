import { test } from '@barber/core'
import { View, Text } from 'react-native'

export default function App () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>{test(50, 50)}</Text>
    </View>
  )
}
