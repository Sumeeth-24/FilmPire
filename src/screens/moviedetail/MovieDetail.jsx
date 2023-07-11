import { View, Text, SafeAreaView, Platform, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import KeyboardAvoidingViewCustom from '../../components/common/keyboardAvoidingView/KeyboardAvoidingViewCustom'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import Cast from './components/cast/Cast'
import MovieList from '../home/components/movieList/MovieList'


var {width, height} = Dimensions.get('window');


const MovieDetail = ({route, navigation}) => {
   // console.log('route?.params ==>', route?.params)
  // const {} = route?.params

  const [cast, setCast] = useState([1,2,3,4,5]);
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);
  
  return (
     <SafeAreaView style={styles.header}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}} 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps="always"
         style={{ flex: 1}}
      >
       {/* back button and movie poster */}
       <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>
              <TouchableOpacity style={styles.background} onPress={() =>   navigation.goBack()}>
                <Icon 
                  name={'chevron-back-outline'}
                  size={28}  color="white"             
                />
              </TouchableOpacity>
            </SafeAreaView>
       </View>
       <View>
          <Image
             source={require('../../assets/images/backgroundposter.png')}
           // source={{ uri: image500(movie.poster_path) || fallbackMoviePoster }}
            style={{width, height: height*0.55}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
            style={[styles.gradient, {width, height: height*0.40}]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
          </LinearGradient>
        </View>

        {/* movie details */}
        <View style={{ marginTop: -(height*0.22), marginVertical: 20}}>

                <Icon 
                  name={'play-circle-outline'}
                  style={styles.playicon}         
                />
            {/* movie title */}
            <Text style={styles.title}>
                Through My Window: Across the Sea
            </Text>

            {/* status, release year, runtime */}
            <Text style={styles.detailsText}>
              Released : 2023 | 🕒 150 min | ⭐ 8.4 (IMDB)
            </Text>

            {/* genres */}
            <View style={styles.genresContainer}>          
                <Text  style={styles.genreText}>
                    Romantic •
                </Text>   
                <Text  style={styles.genreText}>
                    Thriller •
                </Text>  
                <Text  style={styles.genreText}>
                    Action 
                </Text>        
            </View>

             {/* description */}
             <Text style={styles.descriptionText}>
                Extraction" is an action-packed thriller film directed by Sam Hargrave. The movie follows the story of Tyler Rake, a black-market mercenary played by Chris Hemsworth. Rake is hired to rescue the kidnapped son of an international crime lord. Set in Dhaka, Bangladesh, the film takes viewers on a gripping journey filled with intense action.
             </Text>

        </View>

         {/* Cast */}
         <Cast navigation={navigation} cast={cast} />

          {/* similar movies */}
          <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />

      </ScrollView>
     </SafeAreaView>
   
  )
}

export default MovieDetail