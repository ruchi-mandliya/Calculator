import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darkTheme,setDarkTheme] = useState(false);

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };

  return (
    <View style = {{ height : '100%', width : '100%',paddingVertical:20,backgroundColor: darkTheme? colors.dark : colors.light,alignItems:'center'}}>
      <Switch value={darkTheme} onChange = {() => setDarkTheme(!darkTheme) } 
      thumbColor = {darkTheme? colors.light : colors.dark}
      trackColor = {{ true: colors.light2, false: colors.dark2}}
      />

    </View>
  )
}

export default App