import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("adfvv");

  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "rgb(220, 220, 220)",
    light2: "#F7F7F7",
  };
  const Btn = ({ title ,type}) => (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 70,
        width: 70,
        margin: 10 ,
      }} 
    >
      <Text
        style={{
          fontSize: 37,
          color: "black",
          textAlign: "center",
          textAlignVertical: "center",
          color: getBtnColor(type)
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
    if (type == 'top' ) {
      return '#35FBD6'
    } else if(type == 'right') {
      return '#EB6363'
    }
    return getColor(colors.dark, colors.light);
  }

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        alignItems: "center",
      }}
    >
      <Switch
        value={darkTheme}
        onChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop: 140,
          paddingBottom:20
        }}
      >
        {result}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap",justifyContent: 'center',backgroundColor: getColor(colors.light1,colors.dark1), borderTopRightRadius:20,borderTopLeftRadius:20  }}>
        <Btn title="C" type="top" />
        <Btn title="DL"type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number"/>
        <Btn title="9" type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right"/>
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"/>
        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="right"/>
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};

export default App;
