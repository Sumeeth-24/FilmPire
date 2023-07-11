import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { navigate } from '../../../../routes/RootNavigation';

const Cast = ({cast, navigation}) => {
    let personName = 'Chris Hemsworth';
    let characterName = 'Tyler Rake'
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Top Billed Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {cast &&
          cast.map((person, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('personDetail', person)}
              style={styles.castItem}
            >
              <View style={styles.castImageContainer}>
                <Image
                  style={styles.castImage}
                   source={require('../../../../assets/images/castImage1.png')}
                //   source={{
                //     uri: image185(person?.profile_path) || fallbackPersonImage,
                //   }}
                />
              </View>

              <Text style={styles.characterText}>
                {characterName.length > 10
                  ? characterName.slice(0, 10) + '...'
                  : characterName}
              </Text>
              <Text style={styles.originalNameText}>
                {personName.length > 10
                  ? personName.slice(0, 10) + '...'
                  : personName}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

export default Cast