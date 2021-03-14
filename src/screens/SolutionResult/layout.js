import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { View, Card, Text, Icon,ListItem, Rating, Button } from 'react-native-elements'
import makeStyles from './styles';

const SolutionResultContent = (props) => {
    const { solution, task,HomePageButton } = props;

    const solutionArray = solution.answers;
    const questionArray = task.questions;

    const styles = makeStyles();

    const stars = solution.mark == 0 ? 0 : solution.mark/20;

    const renderItem = ({ item, index }) => {

        const isCorrect = questionArray[index].answer == item.value;
        const name = isCorrect ? "check-circle" : "cancel";

        return (
            <Card containerStyle={isCorrect ? styles.correct : styles.wrong}>
                <Text style={styles.questionText}>
                    {index + 1}: {questionArray[index].text}
                </Text>
                <Text style={styles.questionText}>
                    Student Answer: {questionArray[index].answerType === 'Test' ? String.fromCharCode(65 + parseInt(item.value)) : String(item.value)}
                </Text>
                <Text style={styles.questionText}>
                    Correct Answer: {questionArray[index].answerType === 'Test' ? String.fromCharCode(65 + questionArray[index].answer) : questionArray[index].answer}
                </Text>
                <Text style={{ color: 'white' }}>
                    Points : {item.points + " / " + questionArray[index].points}
                </Text>

                <Icon color="white" name={name} size={50} containerStyle={{ right: 0, bottom: 0, top: 0, flex: 1, position: "absolute" }} />

            </Card>
        )
    }

    return (
        <>  
            <SafeAreaView style={styles.globalView}>
            <Rating style={{marginTop:15,backgroundColor:'white'}} ratingBackgroundColor='#ecf0f1'  fractions={5}  showRating={false} readonly={true} startingValue={stars} ratingCount={5} />
            <Text h2Style={{alignSelf:'center'}} h2>{solution.mark}</Text>
            <ListItem
              title='Ödev Adı'
              rightTitle={task.name}
              bottomDivider
              topDivider
            />
            <ListItem
              title='Çözüldüğü Tarih'
              rightTitle={solution.solvedAt.substring(0,10)}
              bottomDivider
            />
             <Button onPress={HomePageButton} buttonStyle={{backgroundColor:"#6441a5", marginVertical:8, width:'50%',alignSelf:'center'}} title="ANASAYFA" />
                <FlatList
                    data={solutionArray}
                    renderItem={(renderItem)}
                    keyExtractor={(item, index) => "solutions" + index.toString()}
                />
            </SafeAreaView>
        </>
    );
};

export default SolutionResultContent;