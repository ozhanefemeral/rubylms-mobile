import React, { useState } from 'react';
import { SafeAreaView, FlatList ,KeyboardAvoidingView, View} from 'react-native';
import makeStyles from './styles';
import CustomWebView from '../../components/CustomWebView'
import RadioComponent from '../../components/RadioComponent'
import {Card,Text,Button,Input} from 'react-native-elements'



const Home = (props) => {
  const { task, answers, onChoose, onSubmitButtonPressed } = props;
  let value = new Array(task.questions.length).fill(NaN);
  const styles = makeStyles();

  const renderItem = ({ item, index }) => {
    return (
      <Card  containerStyle={{padding:10,borderRadius:5,borderTopColor:'green',borderTopWidth:2}}>
        <Text style={styles.text}>
          {item.text}
        </Text>
        {item.answerType == "Test" &&

          <RadioComponent questionIndex={index} choices={item.choices} onChoose={onChoose} />

          ||
          item.answerType == "Classical" &&
          <Input
            multiline
            inputContainerStyle={{borderWidth:1,borderRadius:5}}
            label="Answer"
            labelStyle={{fontWeight:'normal',color:'gray'}}
            onChangeText={text => value[index] = text}
            onEndEditing={() => onChoose(index, value[index])}
          />
        }
      </Card>
    )

  }

  return (
    <>
      <SafeAreaView style={[styles.globalView,styles.container]}>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
      >
        <View style={{flex:1}}>
             
        {
          task.document && 
          <CustomWebView document={task.document}/>
        }
       <FlatList
          style={{marginTop:16}}
          data={task.questions}
          renderItem={(renderItem)}
          keyExtractor={(item, index) => "task:" + index.toString()}
        />
        </View>
        <Button onPress={onSubmitButtonPressed} buttonStyle={{marginVertical:8, width:'50%',alignSelf:'center'}} title="SUBMIT" />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Home;
