import React, { useEffect, useState } from 'react';
import HomeContent from './layout';
import { useUser } from '../../store';
import ApiCall from '../../providers/ApiCall'
import { removeItem, getData } from '../../providers/AsyncStorage';

const TaskDetailsScreen = ({ route, navigation }) => {
  const [task, setTask] = useState({});
  const [isSolved, setSolved] = useState(false)
  const [ownSolutions, setOwnSolutions] = useState([]);
  useEffect(() => {
    getTaskDetails();
  }, []);


  const { taskId ,courseName } = route.params;

  const getTaskDetails = async () => {
    const populate = [
      {
        path: 'solutions',
        model: 'Solution',
        select: ['_id', 'student', 'mark', 'answers','solvedAt']
      }
    ]
    let studentId = await getData('studentId')
    await ApiCall.getTaskDetails(taskId, populate).then((result) => {
      setTask(result.body);
      navigation.setOptions({ title: result.body.name })
      const { chances } = result.body
      const filtered = result.body.solutions.filter(s => s.student == studentId);
      setOwnSolutions(filtered);
      filtered.length < chances ? setSolved(false) : setSolved(true)
    })
  }

  const onPressStart = () => {
    navigation.navigate('SolveTask', { task })
  }

  const onPressView = (viewIndex) => {
    navigation.navigate('SolutionResult', { task, solution: ownSolutions[viewIndex] ,isFromSolve:false})
  }

  return (
    <HomeContent
      courseName={courseName}
      task={task}
      onPressStart={onPressStart}
      isSolved={isSolved}
      solutions={ownSolutions}
      onPressView={onPressView}
    />
  );
};

export default TaskDetailsScreen;
