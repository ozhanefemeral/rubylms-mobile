import {StyleSheet, } from 'react-native';

import color from '../../constants/color';


export default () =>
  StyleSheet.create({
    container: {
      width:'100%',
      backgroundColor: color.screenBg,
      flexDirection:'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      margin:5,
      padding:5,
      paddingHorizontal:10,
      borderRadius:10,
    },
    image:{
        width:100,
        height:170,
        borderRadius:25,
        elevation:10,
    },
    rightView:{
        paddingLeft:20,
        backgroundColor: color.screenBg,
        flex:1,
    },
    topView:{
    },
    bottomView:{
    },
    categoriesView:{
        marginVertical:5,
        flexDirection:'row'
    },
    authorsView:{
        marginVertical:5,
        flexDirection:'row'
    },
    title:{ 
        fontSize:18,      
        fontWeight:'bold'  ,
        marginVertical:5,
    },
    subTitle:{
        marginVertical:5,
    },
    pageCount:{
        marginVertical:5,
        fontWeight:'700'
    },
    author:{
        borderRadius:10,
        marginRight:5,
        padding:7,
        backgroundColor:'orange',
    },
    category:{
        borderRadius:10,
        marginRight:5,
        padding:7,
        backgroundColor:'red',
    },
    authorText:{
        fontWeight:'bold'
    },
    categoryText:{
        color:color.white,
        fontWeight:'bold'
    }
  });
