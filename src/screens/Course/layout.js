import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Card, Text, Button, ListItem } from 'react-native-elements'
import makeStyles from './styles';

const Home = (props) => {
  const { course, onPressSolve,studentId } = props;
  const styles = makeStyles();

  const renderItem = ({ item, index }) => {
    let average, sum = 0;
    const length = item.solutions.length;
    item.solutions.forEach((element) => {
      sum += element.mark;
    });
    average = sum / length;

    const checkStudent = e => e.student === studentId ;

    return (
      <Card
        containerStyle={{ marginTop: 2, marginBottom: 16, borderRadius: 16 }}
        title={item.name}
        titleStyle={{ fontSize: 20 }}
        dividerStyle={{ scaleY: 5 }}
      >
        <ListItem
          title='Veriliş Tarihi'
          rightTitle={item.createdAt ? item.createdAt.substring(0, 10) : "Süresiz"}
          rightContentContainerStyle={{ flex: 1 }}
          rightTitleStyle={{ textAlign: 'right', minWidth: 150 }}
          containerStyle={{ padding: 4 }}

        />
        <ListItem
          title='Bitiş Tarihi'
          rightTitle={item.expirationDate ? item.expirationDate.substring(0, 10) : "Süresiz"}
          rightContentContainerStyle={{ flex: 1 }}
          rightTitleStyle={{ textAlign: 'right', minWidth: 150 }}
          containerStyle={{ padding: 4 }}

        />
        <ListItem
          title='Ortalama'
          rightTitle={average.toFixed(2) || 0}
          rightContentContainerStyle={{ flex: 1 }}
          rightTitleStyle={{ textAlign: 'right', minWidth: 150 }}
          containerStyle={{ padding: 4 }}

        />
        <ListItem
          title='Teslim Edildi'
          rightIcon={item.solutions.some(checkStudent) ? { name: 'check-circle', color: 'green' } : { name: 'cancel', color: 'red' }}
          rightContentContainerStyle={{ flex: 1 }}
          rightTitleStyle={{ textAlign: 'right', minWidth: 150 }}
          containerStyle={{ padding: 4 }}

        />
        <Button
          icon={{ name: 'search', color: '#ffffff' }}
          containerStyle={{ marginTop: 16 }}
          buttonStyle={{ backgroundColor: "#6441a5", width: '50%', alignSelf: 'center' ,borderRadius:24}}
          title='GÖRÜNTÜLE'
          onPress={() => onPressSolve(item._id)}
        />
      </Card>
    )


  }

  return (
    <>
      <SafeAreaView style={styles.globalView}>
        {course &&
          <FlatList
            style={{ marginTop: 16 }}
            data={course.tasks}
            renderItem={(renderItem)}
            keyExtractor={(item, index) => item.key}
          />
        }
      </SafeAreaView>
    </>
  );
};

export default Home;
