import React, { useEffect, useState } from 'react';
import HomeContent from './layout';
import { useUser } from '../../store';
import ApiCall from '../../providers/ApiCall'
import {BackHandler,AppState} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import { removeItem, getData } from '../../providers/AsyncStorage';



const SolveTaskScreen = ({ route, navigation }) => {
  const { task } = route.params;

  const [answers, setAnswers] = useState(new Array(task.questions.length).fill({ value: NaN }))



  useFocusEffect(() => {
        const backHandler=BackHandler.addEventListener('hardwareBackPress', ( ) => {return true});
        return () => {
          backHandler.remove();
        }; 
}, [])

  

  const onChoose = (index, value) => {
    let temp = answers;

    temp[index] = {
      value: value.toString()
    }
    setAnswers(temp)
  }

  const onSubmitButtonPressed = async () => {
    let studentId = await getData('studentId')
    await ApiCall.createSolution(answers, studentId, task._id).then((res) => {
      navigation.navigate('SolutionResult', { task, solution: res.body, isFromSolve: true })
    })
  }

  return (
    <HomeContent
      task={task}
      answers={answers}
      onChoose={onChoose}
      onSubmitButtonPressed={onSubmitButtonPressed}
    />
  );
};

export default SolveTaskScreen;