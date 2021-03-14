import React, { useEffect, useState } from 'react';
import HomeContent from './layout';
import ApiCall from '../../providers/ApiCall'



const CourseScreen = ({ route, navigation }) => {
  const [course, setCourse] = useState({});
  const { courseId,studentId } = route.params;
  useEffect(() => {
    getCourseDetails();
  }, [courseId]);



  const getCourseDetails = async () => {
    const populateBody = [
      {
        path: "tasks",
        model: "Task",
        select: ["_id", "name", "responsibles", "solutions","createdAt","expirationDate"],
        populate: {
          path: "solutions",
          model: "Solution",
          select: ["mark", "student"]
        }
      },
      { path: "teachers", model: "Teacher", select: ["_id", "name"] }
    ];

    await ApiCall.getCourseDetails(courseId, populateBody).then((result) => {
      setCourse(result.body)
      navigation.setOptions({ title: result.body.name })
    })
  }
  
  const onPressSolve = (id)=>{
    navigation.navigate('TaskDetails',{taskId:id , courseName: course.name})
  }

  return (
    <HomeContent
      course={course}
      onPressSolve={onPressSolve}
      studentId={studentId}
    />
  );
};

export default CourseScreen;
