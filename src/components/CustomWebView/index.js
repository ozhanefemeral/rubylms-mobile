import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import PDFView from 'react-native-view-pdf';


export default CustomWebView = ({ document }) => {
    console.log(document);

    let baseURL = `https://ruby-lms.herokuapp.com/api/files/${document}`
    return (
        <>

                <PDFView
                    resource={baseURL}
                    resourceType='url'
                    style={{flex:2,margin:10}} /> 
        </>
    )
};

