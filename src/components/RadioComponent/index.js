import React from 'react';
import { CheckBox } from 'react-native-elements';
import { FlatList,View } from 'react-native';

export default RadioComponent = ({ choices, questionIndex, onChoose }) => {

  const [selectedIndex, setSelectedIndex] = React.useState(NaN);


  return (
    <React.Fragment>
      <View >
        <FlatList
          data={choices}
          renderItem={({ item, index }) => {
            return (
              <CheckBox
                checked={index === selectedIndex}
                title={item}
                onPress={ ()=>{
                  onChoose(questionIndex, index)
                  setSelectedIndex(index)
                }}
              />
            )
          }}
          keyExtractor={(item,index)=>"choice" + index.toString()} />
      </View>

    </React.Fragment>
  );
};