import React, { useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import makeStyles from './styles';
import { Button, Text, ListItem, Card,Rating } from 'react-native-elements'
//import { Text, Card, Button, Layout } from '@ui-kitten/components'

const Home = (props) => {
  const { task, onPressStart, isSolved, solutions, onPressView , courseName } = props;
  const styles = makeStyles();
  const [text, setText] = useState("BAŞLA")

  return (
    <>
      {task.questions &&
        <SafeAreaView style={styles.globalView}>
          <View>
            <ListItem
              title='Ders Adı'
              rightTitle={courseName}
              bottomDivider
              
            />
            <ListItem
              title='Veriliş Tarihi'
              rightTitle={task.createdAt ? task.createdAt.substring(0,10) : ""}
              bottomDivider
            />
            <ListItem
              title='Teslim Tarihi'
              rightTitle={task.expirationDate ? task.expirationDate.substring(0,10) : "Süresiz"}
              bottomDivider
            />
            <ListItem
              title='Soru Sayısı'
              rightTitle={task.questions.length}
              bottomDivider
            />
          </View>
          <Button
            onPress={onPressStart}
            disabled={isSolved}
            icon={{
              name: 'assignment',
              color: 'white'
            }}
            buttonStyle={{backgroundColor:"#4CAF50"}}
            containerStyle={{ width:'75%',alignSelf:'center',marginVertical:10,borderRadius:16}}
            title={text} />
          {
            <View style={{flex:1}}>
              {solutions.length > 0 &&
                <FlatList

                  data={solutions}
                  renderItem={({ item, index }) => {
                    
                    const stars = item.mark == 0 ?  0 : item.mark/20 + 0.5;

                    return (
                      <Card
                      containerStyle={{marginTop:2,marginBottom:16,borderRadius:16}}
                      title={<Rating  style={{marginBottom:12}} fractions={5} showRating={false} readonly={true} startingValue={stars} ratingCount={5} />}
                      >
                        <ListItem
                          title='Tarihi'
                          rightTitle={item.solvedAt.substring(0,10)}
                          containerStyle={{ padding: 4 }}
                        />
                        <ListItem
                          title='Not'
                          rightTitle={item.mark}
                          containerStyle={{ padding: 4 }}
                        />
                        <ListItem
                          title='Süre'
                          rightTitle={item.duration}
                          containerStyle={{ padding: 4, paddingBottom: 16 }}
                        />
                        <Button
                          icon={{ name: 'search', color: '#ffffff' }}
                          buttonStyle={{backgroundColor:"#6441a5", borderRadius: 16, marginLeft: 0, marginRight: 0, marginBottom: 0 ,width:'75%',alignSelf:'center'}}
                          title='GÖRÜNTÜLE'
                          onPress={() => onPressView(index)}
                        />
                      </Card>
                    )
                  }}
                  keyExtractor={(item, index) => "TaskDetail:" + index.toString()}
                />}
            </View>
          }


        </SafeAreaView>
      }
    </>
  );
};

export default Home;
