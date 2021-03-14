import React, { useEffect } from 'react'
import SolutionResultContent from './layout' 
import { BackHandler } from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
const SolutionResult = ({ route, navigation }) => {

    const { solution, task, isFromSolve } = route.params;

    const onPressHomePageButton = () => {
        navigation.navigate('Home')
    }


    useFocusEffect(() => {
        if(isFromSolve){
            const backHandler=BackHandler.addEventListener('hardwareBackPress', ( ) => {return true});
            return () => {
              backHandler.remove();
            };
        }    
    }, [])
   
    return (
        <SolutionResultContent
            solution={solution}
            task={task}
            HomePageButton={onPressHomePageButton}
        />
    )
}
export default SolutionResult;
