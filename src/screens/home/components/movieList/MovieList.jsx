import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import CircularRate from '../../../../components/common/circularRate/CircularRate';
import { navigate } from '../../../../routes/RootNavigation';

const {width, height} =  Dimensions.get('window');

const MovieList = ({title, data, hideSeeAll}) => {
   let movieName = "Extraction: 2"
  return (
    <View style={styles.main}>
     <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
        !hideSeeAll && (
        <TouchableOpacity>
          <Text style={styles.text}>See All</Text>
        </TouchableOpacity>
        )
      }
     </View>
     <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
     >
      {data.map((item, index) => {
        return (
          <TouchableWithoutFeedback
            key={index} 
            onPress={()=> navigate('movieDetail')}
          >
           <View style={styles.movieContainer}>
              <Image 
                  source={require('../../../../assets/images/backgroundposter.png')}                     
                  style={{ width: width*0.33, height: height*0.22, borderRadius: 15}} 
              />
                <CircularRate value={6.7} />
                <Icon 
                  name={'heart-outline'}
                  style={styles.icon}             
                />
               <View>                  
                  <Text style={{color: '#ffffff', fontWeight: 'bold'}}>2023</Text>
                  <Text style={styles.movieTitle}>
                  {
                     movieName.length > 14 ? movieName.slice(0, 14)+'...' : movieName
                  }
                  </Text>
              </View>
           </View>
          </TouchableWithoutFeedback>
        )
       })
      }
     </ScrollView>
    </View>
  )
}

export default MovieList