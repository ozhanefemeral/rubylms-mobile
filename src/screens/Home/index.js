import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-elements'
import HomeContent from './layout';
import { useUser } from '../../store';
import userActions from '../../actions/userActions';
import ApiCall from '../../providers/ApiCall'
import { removeItem, getData } from '../../providers/AsyncStorage';

const HomeScreen = props => {
  const [userState, userDispatch] = useUser();
  const [student, setStudent] = useState({});

  useEffect(() => {
    getStudentId();
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          buttonStyle={{ backgroundColor: '#B00020', borderRadius: 24, marginRight: 5 }}
          icon={{ name: "power-settings-new", color: 'white', size: 24 }}
          onPress={() => { onPressLogout() }} />
      ),
    })
  }, [])




  const getStudentId = async () => {
    let studentId = await getData('studentId')
    getStudent(studentId);
  }

  const onPressLogout = async () => {
    userDispatch(userActions.updateToken(null));
    userDispatch(userActions.updateUser([]));
    removeItem('token')
  };

  const getStudent = async (studentId) => {
    const populateBody = [
      {
        path: "courses", model: "Course", select: ["_id", "name", "teachers"],
        populate: {
          path: 'teachers',
          model: 'Teacher',
          select: ["name"]
        }
      }
    ];
    await ApiCall.getStudent(studentId, populateBody).then((result) => {
      setStudent(result.body)
    })

  }

  const onPressView = (id) => {
    props.navigation.navigate('Course', { courseId: id, studentId: student._id })
  }

  return (
    <HomeContent
      onPressLogout={onPressLogout}
      onPressView={onPressView}
      data={student}
    />
  );
};

export default HomeScreen;
