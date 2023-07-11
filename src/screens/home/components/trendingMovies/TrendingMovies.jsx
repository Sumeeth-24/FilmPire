import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import styles from '../../styles';
import Carousel from 'react-native-snap-carousel';
import { navigate } from '../../../../routes/RootNavigation';

const {width, height} = Dimensions.get('window');

const TrendingMovies = ({data}) => {
  
  const handleClick = (item) => {
    navigate('movieDetail', item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.beforeElement} />
       <Carousel
         data={data}
         renderItem={({item}) => <MovieCard handleClick={handleClick} item={item} />}
         firstItem={1}
         inactiveSlideOpacity={0.60}
         sliderWidth={width}
         itemWidth={width*0.62}
         slideStyle={{display: 'flex', alignItems: 'center'}}
        />
        
    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return(
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <Image 
             source={require('../../../../assets/images/backgroundposter.png')} 
             style={
              [styles.image,
              {
                width: width*0.7,
                height: height*0.5,
              }
             ]}
          
            />
        </TouchableWithoutFeedback>
    )
}

export default TrendingMovies