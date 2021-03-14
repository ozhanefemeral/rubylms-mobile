import * as React from 'react';
import { createStackNavigator,TransitionPresets  } from '@react-navigation/stack';
import HomeLayout from '../screens/Home';
import SolveTaskLayout from '../screens/SolveTask';
import TaskDetailsLayout from '../screens/TaskDetails';
import CourseLayout from '../screens/Course';
import SolutionLayout from '../screens/SolutionResult'



function HomeScreen({ route, navigation }) {
  return (
    <HomeLayout navigation={navigation} route={route} />
  );
}
function SolutionResult({ route, navigation }) {
  return (
    <SolutionLayout navigation={navigation} route={route} />
  );
}
function SolveTaskScreen({ route, navigation }) {
  return (
    <SolveTaskLayout navigation={navigation} route={route} />
  );
}
function TaskDetailsScreen({ route, navigation }) {
  return (
    <TaskDetailsLayout navigation={navigation} route={route} />
  );
}
function CourseScreen({ route, navigation }) {
  return (
    <CourseLayout navigation={navigation} route={route} />
  );
}

const AuthStack = createStackNavigator();

const AuthStackNavigator = (props) => {
  return (
    <AuthStack.Navigator initialRouteName="Home">
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Ruby',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: '#6441a5',
          },
          headerTintColor:"#fff",
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      />
      <AuthStack.Screen
        name="Course"
        component={CourseScreen}
        options={{
          title: 'DERS',
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: '#6441a5',
          },
          headerTintColor:"#fff",
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
      />
      <AuthStack.Screen
        name="SolveTask"
        component={SolveTaskScreen}
        options={{
          headerShown:false
        }}
      />
      <AuthStack.Screen
        name="SolutionResult"
        component={SolutionResult}
        options={{
          headerShown:false
        }}
      />
      <AuthStack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: '#6441a5',
          },
          headerTintColor:"#fff",
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
      />
    
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;