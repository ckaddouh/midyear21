import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, Animated, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import AwesomeButton from "react-native-really-awesome-button";


const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

global.secondsPassed = 0;
global.secondsPassed2 = 0;
global.wordsGotten = 0;
global.wordList = ["calculate", "algorithm", "computer", "gigabyte", "cache", "dashboard", "emoticon", "encryption",
"application", "firewall", "hardware", "graphics", "database", "processing", "controlling", "aggregate", "archive", "assembler",
"authorization", "autonomous", "backspace", "keyboard", "binary", "hexadecimal", "octal", "booting", "broadcast", "display", "local",
"connection", "decompress", "document", "download","electricity","explorer","footnote","license","software","motherboard","browser","malware",
"commercial", "operating", "personal", "proprietary", "random", "filesystem", "spamming", "spreadsheet", "security", "synergy", "training",
"version", "virtual", "vulnerability", "errors", "attachment", "assisting", "compatible", "technology", "boolean", "variable", "computing",
"domain","ethernet","email","gateway","internet","megahertz","phishing","pseudocode", "protocol", "resolution", "evolution", "analysis", "introduction", "analog", 
"microprocessor", "peripheral", "server", "integrated", "machine", "mainframe", "arithmetic", "information", "mechanism", "expansion",
"predictor","supercomputer","embedded", "laptop", "universal", "exchange", "formatting", "screensaver", "multimedia", "incrementor", "mathematician",
"equipment", "gadget", "spacebar"];

function specialButton() {
  return <AwesomeButton>Text</AwesomeButton>;
}


function HomeScreen({ navigation }) {
  for (var i = wordList.length - 1; i > 0; i--) {	  
    var j = Math.floor(Math.random() * (i + 1));	  
    var temp = wordList[i];	  
    wordList[i] = wordList[j];	  
    wordList[j] = temp;	  
  }

  return (
   
    <SafeAreaView style={styles.container}>
      
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style = {styles.title}>TURBO TEXTER</Animatable.Text>
      
      <AwesomeButton style= {styles.modeButtons1}
      backgroundColor="blue"
      backgroundShadow="blue"
      borderColor="white"
      medium
      secondary
      onPress={next => { navigation.navigate('Game')
        next();
      }}
    >
      MODE 1
    </AwesomeButton>

    <AwesomeButton style = {styles.modeButtons2}
      backgroundColor="blue"
      medium
      secondary
      onPress={next => { navigation.navigate('GameMode2')
        next();
      }}
    >
      MODE 2
    </AwesomeButton>

    <AwesomeButton style = {styles.instructionButton}
      backgroundColor="blue"
      medium
      secondary
      onPress={next => { navigation.navigate('Instructions')
        next();
      }}
    >
      Instructions
    </AwesomeButton>


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
  const [words, setWords] = useState(wordList);
  

  var date = new Date();
  
  const [sec, setSecs] = useState(date.getSeconds());
  const [min, setMins] = useState(date.getMinutes());
  const [newSec, setNewSec] = useState(0);
  const [newMin, setNewMin] = useState(0);

  //const[xValue, setXValue] = useState(0);

  
  // Creating Date() function object.

  // Getting current hour from Date object.
  // minutes = date.getMinutes();
  // seconds = date.getSeconds();

  const [xValue, setXValue] = useState(0);
  const inputHandler = (enteredText) => {
    //var points = 0;
  
    if (score < 20) {
      setValue(enteredText);
      if (enteredText == words[score]) {
        setValue('');
        setScore(score+1);
        setXValue(xValue+15);
      }
    }
    else {
      var newDate = new Date();
      setNewMin(newDate.getMinutes());
      setNewSec(newDate.getSeconds());
      if (newMin == min) {
        secondsPassed = newSec - sec;        
      }
      else if (newMin != min) {
        secondsPassed = (60-sec) + newDate.getSeconds();
      }

      if (min === newDate.getMinutes()) {
        secondsPassed -= 60;
      }
      
      navigation.navigate('End');
    }

  };
  // used to be => onChangeText(text)



  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title2}>Type the words as they appear! See how long it takes you to get 20 correct.</Text>

      <Text style = {styles.word}>{words[score]}</Text>
      <Text style = {styles.score}>{score}</Text>
      {/* <Text>{min} : {sec} : {newMin} : {newSec}, {secondsPassed}, {newMin == min ? "true":"false"} </Text> */}
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
      <AwesomeButton
        backgroundColor="blue"
        color = "#45bf65"
        medium
        secondary
        onPress={next => { navigation.navigate('Home')
          next();
        }}
      >
        BACK
    </AwesomeButton>
      <Image
        style = {{position: 'absolute', top: 200, left: xValue, width: 20, height: 35}}
        source = {require('./assets/mouse.png')}
        />

      <Image
        style = {{position: 'absolute', top: 200, right: 20, width: 40, height: 35}}
        source = {require('./assets/folder.png')}
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

function GameScreen2({navigation}) {

  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);
  const [words, setWords] = useState(wordList);
  
  var date = new Date();
  const [sec, setSecs] = useState(date.getSeconds());
  const [min, setMins] = useState(date.getMinutes());
  const [newSec, setNewSec] = useState(0);
  const [newMin, setNewMin] = useState(0);

  const inputHandler = (enteredText) => {
    if (secondsPassed2 <= 60) {
      setValue(enteredText);
    
      if (enteredText == words[score]) {
        setValue('');
        setScore(score+1);
        wordsGotten = score;
      }
      var newDate = new Date();
      setNewMin(newDate.getMinutes());
      setNewSec(newDate.getSeconds());
      if (newMin == min) {
        secondsPassed2 = newSec - sec;        
      }
      else if (newMin != min) {
        secondsPassed2 = (60-sec) + newDate.getSeconds();
      }

      if (min === newDate.getMinutes()) {
        secondsPassed2 -= 60;
      }
    }
    else {
      navigation.navigate('End2');
    }
  }

    

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title2}>Type as many words as you can within a minute!</Text>
      <Text style = {styles.word}>{words[score]}</Text>
      <Text style = {styles.score}>{score}</Text>

      <TextInput 
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
        value={value}
        autoFocus = {true}
        onChangeText = {inputHandler}
        placholder = "Type the words as they appear!"
        autoCapitalize="none"
        autoCorrect = "false"
      />
      <AwesomeButton
        backgroundColor="blue"
        color = "#45bf65"
        medium
        secondary
        onPress={next => { navigation.navigate('Home')
          next();
        }}
      >
        BACK
    </AwesomeButton>
    </SafeAreaView>
  );
}

function InstructionScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Instructions</Text>
      <Text style = {styles.instructions}>Text the words you see as fast as you can!</Text>
      <Text> </Text>
      <Text style = {styles.instructions}>In mode 1, see how long it takes you to type 20 words.</Text>
      <Text> </Text>
      <Text style = {styles.instructions}>In mode 2, see how many words you can type in 60 seconds!</Text>
      <Text> </Text>
      
      {/* not able to navigate back to home from a button at the moment */}
      <AwesomeButton
        backgroundColor="blue"
        color = "#45bf65"
        medium
        secondary
        onPress={next => { navigation.navigate('Home')
          next();
        }}
      >
        BACK
    </AwesomeButton>

      <Image
              style = {styles.arrowgif}
              source={require('./assets/continuous_teal.gif')}
        />
    </SafeAreaView>
  );
}

function EndScreen({navigation}) {
  for (var i = wordList.length - 1; i > 0; i--) {	  
    var j = Math.floor(Math.random() * (i + 1));	  
    var temp = wordList[i];	  
    wordList[i] = wordList[j];	  
    wordList[j] = temp;	  
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>THE END</Text>
      <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial', color: 'white'}}>You got 20 words in {secondsPassed} seconds!</Text>
      {/* not able to navigate back to home from a button at the moment */}

      <TouchableHighlight onPress = {() => navigation.navigate('Home')} style = {styles.congrats}>
        <Image
                source={require('./assets/congrats.png')}
          /> 
      </TouchableHighlight>  

      
    </SafeAreaView>
  );
}

function EndScreen2({navigation}) {
  secondsPassed2 = 0;

  for (var i = wordList.length - 1; i > 0; i--) {	  
    var j = Math.floor(Math.random() * (i + 1));	  
    var temp = wordList[i];	  
    wordList[i] = wordList[j];	  
    wordList[j] = temp;	  
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>THE END</Text>
      <Text style = {{fontSize: 20, textAlign: 'center', fontFamily: 'Arial', color: 'white'}}>You got {wordsGotten} words in 60 seconds!</Text>
      {/* not able to navigate back to home from a button at the moment */}

      <TouchableHighlight onPress = {() => navigation.navigate('Home')} style = {styles.congrats}>
        <Image
                source={require('./assets/congrats.png')}
          /> 
      </TouchableHighlight>  
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
        <Stack.Screen name="GameMode2" component={GameScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="Instructions" component={InstructionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="End" component={EndScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="End2" component={EndScreen2} options={{ headerShown: false }}/>
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
    minHeight: 60
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
    textAlign: 'center',
  },
  playagain:{
    flex: 1,
    top: 100,
  },
  instructions: {
    fontSize: 20, 
    textAlign: 'center', 
    fontFamily: 'Courier New',
    color: 'white',
  },
  instructionButton: {
    position: 'absolute',
    bottom: 300,
  }, 
  modeButtons1: {
    position: 'absolute',
    left: 100,
  },
  modeButtons2: {
    position: 'absolute',
    right: 100,
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
  },
  arrowgif: {
    position: 'absolute',
    top: 179,
  },
  mouse:{
    position: 'absolute',
    top: 200,
    left: 0,
    width: 20,
    height: 35,
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
