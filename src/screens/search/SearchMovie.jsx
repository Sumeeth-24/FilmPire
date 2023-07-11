import { View, Text, ScrollView, Dimensions, Image, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import styles from './styles';
import TextInput_ from '../../components/elements/input';

const {width, height} =  Dimensions.get('window');

// let timer;
// const timeout = 500;

const SearchMovie = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([1,2,3,4,5])

    let movieName = "Through the window: Part 2 through"

    const onQueryChange = (value) => {
        const newQuery = value;
        setQuery(newQuery);
       // clearTimeout(timer);
            // timer = setTimeout(() => {
            // setQuery(newQuery);
            // }, timeout);
      }; 

  return (
    <SafeAreaView style={styles.header}>
     
       {/* search input */}
       <View style={styles.searchContainer}>   
        <TextInput_
            onChange={(text) => onQueryChange(text)}
            placeholder="Search FilmPire"
            value={query}
            placeholderTextColor="lightgray"
            iconButton={
                query?.length > 0
                ? {
                    icon: 'close-circle',
                    onPress: () => setQuery(''),
                    color: '#e00d0d',
                  }
                : undefined
            }
        />
      </View>

        {/* search results */}
        {results.length > 0 ? (
          <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{paddingHorizontal:15}}
                    style={{marginTop: 12}}
                >
                    <Text style={styles.resultsText} >Results ({results.length})</Text>
                    <View style={styles.rowContainer} >
                        {
                            results.map((item, index)=>{
                                return (
                                    <TouchableWithoutFeedback 
                                        key={index} 
                                        onPress={()=> navigation.push('Movie', item)}>
                                        <View style={styles.itemContainer} >
                                            <Image 
                                                // source={{uri: image185(item.poster_path) || fallbackMoviePoster}} 
                                                source={require('../../assets/images/backgroundposter.png')}
                                                style={styles.image} 
                                            />
                                            <Text style={styles.itemText}>
                                                {
                                                    movieName.length>22? movieName.slice(0,22)+'...': movieName
                                                }
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
                    
        </ScrollView>
        ) : (
          <View style={{ flexDirection: 'row',
    justifyContent: 'center'}}>
                    <Image 
                        source={require('../../assets/images/Welcome.png')} 
                        style={{height: 96,
    width: 96,}}
                    />
          </View>
        )
        }
        

    </SafeAreaView>
  )
}

export default SearchMovie