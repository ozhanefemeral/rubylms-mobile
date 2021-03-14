import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Card, Text, Button, ListItem,Avatar,Icon} from 'react-native-elements'
import makeStyles from './styles';

const Home = (props) => {
  const styles = makeStyles();
  const { onPressView, onPressLogout, data } = props
  const hasNew = true;
  const renderItem = ({ item, key }) => {
    return (

      <ListItem
        title={item.name}
        bottomDivider
        topDivider
        leftAvatar={<Avatar
        rounded
        size={40}
        showAccessory={hasNew}
          accessory={{size:16,color:'red',name:'notifications',backgroundColor:'#ecf0f1',borderRadius:15}}
          icon={{ name: 'book' ,color:'black',size:32}}
          >
          
        </Avatar>}
        onPress={() => onPressView(item._id)}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        subtitle={item.teachers.map(item =>  item.name + ' ').toString()}
        chevron={{ color: '#6441a5',size:24 }}
        
      />
    // <Card
    // containerStyle={{marginTop:2,marginBottom:16}}
    // title={item.name}
    // titleStyle={{fontSize:20}}
    // dividerStyle={{scaleY:5}}
    // >
    //   <ListItem

    //     title='Öğretmen(ler)'
    //     rightTitle={item.teachers.map(item =>  item.name + ' ').toString()}
    //     rightContentContainerStyle={{flex:1}}
    //     rightTitleStyle={{textAlign:'right'}}
    //     containerStyle={{ padding: 4}}
    //   />
    //   <Button
    //     icon={{ name: 'search', color: '#ffffff' }}
    //     containerStyle={{marginTop:16}}
    //     buttonStyle={{backgroundColor:"#6441a5",width:'75%',alignSelf:'center'}}
    //     title='GÖRÜNTÜLE'
    //     onPress={() => onPressView(item._id)}
    //   />
    // </Card>
    )
  }

return (
  <>
    <SafeAreaView style={styles.globalView}>
      {props.data &&

        <FlatList
        style={{marginVertical:5}}
          data={data.courses}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.key}
        />
      }
    </SafeAreaView>
  </>
);
};

export default Home;
