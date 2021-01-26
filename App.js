import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, Animated } from 'react-native';
// import MarqueeText from 'react-native-marquee';
import { StackNavigator } from 'react-navigation';
// import Welcome from "./assets/screens/Welcome.js";
// import Play from "./assets/screens/Game.js";
//import wordsFile from "./words.txt";
import * as Animatable from 'react-native-animatable';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};


function HomeScreen({ navigation }) {
  return (
   
    <SafeAreaView style={styles.container}>
      
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style = {styles.title}>SPEEDY SNAKE</Animatable.Text>

      <Button
        title="PLAY"
        onPress={() => navigation.navigate('Game')}
        color= "#fff"
      />
      <Button
        title="INSTRUCTIONS"
        onPress={() => navigation.navigate('Instructions')}
        color= "#fff"
      />
      <Image
              style = {styles.dock}
              source={require('./assets/windows-dock.png')}
        />
      <Image
              style = {styles.imagegif}
              source = {require('./assets/mouse_click_small.gif')}
        />
    </SafeAreaView>
  );
}



// setWords([...words, nextWord]);
function GameScreen({navigation}) {
  //var fs = require("fs");
  // var text = fs.readFileSync("./words.txt").toString('utf-8');

  <Image
              style = {styles.mouseß}
              source={require('./assets/mouse.png')}
        />

  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(["calculate",
  "algorithm",
  "computer",
  "gigabyte",
  "cache",
  "dashboard",
  "emoticon",
  "encryption",
  "application",
  "firewall",
  "hardware",
  "graphics",
  "database",
  "processing",
  "controlling",
  "aggregate",
  "archive",
  "assembler",
  "authorization",
  "autonomous",
  "backspace",
  "keyboard",
  "binary",
  "hexadecimal",
  "octal",
  "booting",
  "broadcast",
  "display",
  "local",
  "connection",
  "decompress",
  "document",
  "download",
  "electricity",
  "explorer",
  "footnote",
  "license",
  "software",
  "motherboard",
  "browser",
  "malware",
  "commercial",
  "operating",
  "personal",
  "proprietary",
  "random",
  "filesystem",
  "spamming",
  "spreadsheet",
  "security",
  "synergy",
  "training",
  "version",
  "virtual",
  "vulnerability",
  "errors",
  "attachment",
  "assisting",
  "compatible",
  "technology",
  "boolean",
  "variable",
  "computing",
  "domain",
  "ethernet",
  "email",
  "gateway",
  "internet",
  "megahertz",
  "phishing",
  "pseudocode",
  "protocol",
  "resolution",
  "evolution",
  "analysis",
  "introduction",
  "analog",
  "microprocessor",
  "peripheral",
  "server",
  "integrated",
  "machine",
  "mainframe",
  "arithmetic",
  "information",
  "mechanism",
  "expansion",
  "predictor",
  "supercomputer",
  "embedded",
  "laptop",
  "universal",
  "exchange",
  "formatting",
  "screensaver",
  "multimedia",
  "incrementor",
  "mathematician",
  "equipment",
  "gadget"]);
  const [index, setIndex] = useState(Math.floor(Math.random()*words.length));
  //["hello", "there", "world", "this", "list", "works", "I", "thiNk"]
  // setWords(wordFile.toSTring('utf-8').split("\n"));
  // var content = require('./words.txt');
  // var tags = content.split("\n");
  // setWords(tags);
  // console.log(words[0]);
  // if ({updateList}) {
  //   var i;
  //   var j;

  //   for ( i = words.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     var temp = words[i];
  //     words[i] = words[j];
  //     words[j] = temp;
  //   }
  //   setUpdateList(false);
  // }
  var count = 0;
  const inputHandler = (enteredText) => {
    //var points = 0;
  
    if (score < 20) {
      setValue(enteredText);
      if (enteredText == words[score]) {
        setValue('');
        setScore(score+1);
        count += 1;
        setIndex(Math.floor(Math.random()*words.length));
        // setWords(words.splice(index, 1));
      }
    }
    else {
      navigation.navigate('End');
    }

  };
  // used to be => onChangeText(text)
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title2}>Type the words as they appear!</Text>
      <Text style = {styles.word}>{words[score]}</Text>
      <Text style = {styles.score}>{score}</Text>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        value={value}
        autoFocus = {true}
        onChangeText = {inputHandler}
        //onChangeText={text => inputHandler(text)}   
        // onChangeText={text => checkEquals(text)}
        // onKeyPress = {(keyPress) => handleKeyDown(keyPress)}
        placholder = "Type the words as they appear!"
        autoCapitalize="none"
        autoCorrect = "false"
      />
      <Button 
        title="BACK"
        color = "#45bf65"
        onPress={() => navigation.navigate('Home')}
      /> 
      {/* if ({showButton}) {
        <Button
          title="FINISH"
          onPress={() => navigation.navigate('Game')}
          color= "#fff"
        />
      } */}
    </SafeAreaView>
  );
}

function InstructionScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Instructions</Text>
      <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial'}}>Text the words you see as fast as you can! Hit play to begin.</Text>
      {/* not able to navigate back to home from a button at the moment */}
      <Button 
        title="BACK"
        color = "#45bf65"
        onPress={() => navigation.navigate('Home')}
      />    
    </SafeAreaView>
  );
}

function EndScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>End Screen</Text>
      <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial'}}>You got 20 words in ___ seconds!</Text>
      {/* not able to navigate back to home from a button at the moment */}
      <Button 
        title="PLAY AGAIN"
        color = "#45bf65"
        onPress={() => navigation.navigate('Home')}
      /> 
      <Image
              style = {styles.congrats}
              source={require('./assets/congrats.png')}
        />   
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

//  options={{ headerShown: false }} inside <Stack.Screen>
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Game" component={GameScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Instructions" component={InstructionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="End" component={EndScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 100,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', 
  },
  title2: {
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: 100,
  },
  dock: {
    position: 'absolute',
    bottom: 0,
    width: 380,
    height: 40,
  },
  imagegif: {
    position: 'absolute',
    top: 100,
    width: 200,
    //height: 400,
  mouse:{
    position: 'absolute',
    top: 100,
    width: 100,
    height: 100,
  },
  congrats:{
    position: 'absolute',
    top: 210,
    width: 290,
    height: 120,
  },
  word: {
    color: '#fff',
    fontSize: 40,
    bottom: 40, 
  },
  score: {
    color: '#fff',
    fontSize: 30,
    position: 'absolute',
    left: 20,
    top: 40,
  },
});

export default App;
