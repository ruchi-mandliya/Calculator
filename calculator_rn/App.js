import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darkTheme,setDarkTheme] = useState(false);
  return (
    <View>
      <Switch value={darkTheme} onChange = {() => setDarkTheme(!darkTheme) } />

    </View>
  )
}

export default App