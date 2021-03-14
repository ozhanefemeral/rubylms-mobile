import React,{} from 'react';
import {View, Image, Text} from 'react-native';
import makeStyles from './styles';

const ListItem = props => {
    const styles = makeStyles();
    const authorColors = ['green','blue','red'];
    const categoryColors = ['#2980b9','#2c3e50','#e74c3c'];
    return(
        <View style={styles.container}>
            <Image
             style={styles.image}
             source={{
                uri: props.imgUrl,
            }}
            />
            <View style={styles.rightView}>
                <View style={styles.topView}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{props.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subTitle}>{props.subTitle}</Text>
                    <Text style={styles.pageCount}>{`Page: ${props.pageCount}`}</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.authorsView}>
                    {
                        props.authors.map((item, index) => ( 
                            <View >
                                 <Text style={styles.authorText}>{'  - '+item}</Text>
                            </View>
                        ))
                    }
                    </View>
                  <View style={styles.categoriesView}>
                    {
                        props.categories.map((item,index)=>(
                            <View style={[styles.category,{backgroundColor :categoryColors[index]}]}>
                               <Text style={styles.categoryText}>{item}</Text>
                            </View>
                        ))

                    }
                    </View>

                </View>
            </View>
        </View>
    );
};

export default ListItem;

/*
{
    data.map(item => (
    <ListItem
        title={item.title}
        subTitle={item.shortDescription}
        imgUrl={item.thumbnailUrl}
        pageCount={item.pageCount}
        authors= {item.authors}
        categories= {item.categories}
    />
    ))
}
*/
