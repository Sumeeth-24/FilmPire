import { View, Text, Dimensions, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import MovieList from '../home/components/movieList/MovieList';

var {width, height} = Dimensions.get('window');

const PersonDetail = ({route, navigation}) => {

    const [personMovies, setPersonMovies] = useState([1,2,3,4,5])

  return (
    <ScrollView 
      contentContainerStyle={{paddingBottom: 20}} 
      showsVerticalScrollIndicator={false} 
      keyboardShouldPersistTaps="always"
      style={{ flex: 1, backgroundColor: '#04020d' }}
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

         {/* person details */}
         <View>
            <View style={[styles.imageContainer,  
              styles.customShadow   
            ]}>
                <View style={styles.profileImageContainer}>
                   <Image 
                      source={require('../../assets/images/castImage2.png')}
                      style={{height: height*0.43, width: width*0.74}}
                     />
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>Keanu Reeves</Text>
                 <Text style={styles.placeOfBirthText}>
                   London, United Kingdom
                </Text>
            </View>

            <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                <Text style={styles.infoText}>Gender</Text>
                <Text style={styles.infoValueText}>
                    {/* {person?.gender == 1 ? 'Female' : 'Male'} */}
                    Male
                </Text>
                </View>
                <View style={styles.infoItem}>
                <Text style={styles.infoText}>Birthday</Text>
                    <Text style={styles.infoValueText}>
                        {/* {person?.birthday} */}
                        20-04-1975
                    </Text>
                </View>
                <View style={styles.infoItem}>
                <Text style={styles.infoText}>known for</Text>
                    <Text style={styles.infoValueText}>
                        {/* {person?.known_for_department} */}
                        Acting
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 10, alignItems: 'center'}}>
                <Text style={styles.infoText}>Popularity</Text>
                    <Text style={styles.infoValueText}>
                         {/* {person?.popularity?.toFixed(2)} % */}
                         80 %
                    </Text>
                </View>
            </View>

            <View style={styles.biographyContainer}>
                <Text style={styles.biographyTitle}>Biography</Text>
                <Text style={styles.biographyText}>
                {/* {person?.biography ? person.biography : 'N/A'} */}
                Keanu Reeves is a Canadian actor, producer, and musician, widely recognized for his versatile performances and charismatic on-screen presence. Born on September 2, 1964, in Beirut, Lebanon, Reeves began his acting career in the mid-1980s and quickly gained attention for his talent and unique appeal.
                Reeves rose to prominence with his breakthrough role as Ted Theodore Logan in the cult classic "Bill & Ted's Excellent Adventure" (1989) and its subsequent sequels. However, it was his portrayal of the iconic character Neo in "The Matrix" trilogy (1999-2003) that solidified his status as an international star. His compelling performance in these films showcased his ability to seamlessly blend intense action sequences with introspective and philosophical elements.
                </Text>
            </View>

            {/* movieList */}
            <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />

    </View>

    </ScrollView>
  )
}

export default PersonDetail