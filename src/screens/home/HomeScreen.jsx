import {useState}  from 'react'
import { View, Text,Statusbar, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import KeyboardAvoidingViewCustom from '../../components/common/keyboardAvoidingView/KeyboardAvoidingViewCustom';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';
import { useKeyboard } from '../../hooks';
import TrendingMovies from './components/trendingMovies/TrendingMovies';
import MovieList from './components/movieList/MovieList';
import { navigate } from '../../routes/RootNavigation';

const HomeScreen = () => {

  const keyboardStatus = useKeyboard()
  const [activeButton, setActiveButton] = useState('All');
  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);

  const [icons, setIcons] = useState([
    {
      label: 'Home',
      icon: 'home',
      vector: true,
      onPress: () => {
      },
    },
    {
      label: 'Search',
      icon: 'search-outline',
      vector: true,
      onPress: () => {
        navigate('searchMovie')
      },
    },
    {
      label: 'Bookmark',
      icon: 'bookmark-outline',
      vector: true,
      onPress: () => {
        navigate('bookMarkOption')
      },
    },
    {
      label: 'Profile',
      icon: 'person-outline',
      vector: true,
      onPress: () => {
      },
    },
  ])

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

 

  return (
     <SafeAreaView style={styles.header}>
        <ScrollView  
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false} 
          keyboardShouldPersistTaps="always">
        <View style={styles.navbar}>
           <Image
             source={require("../../assets/images/F.png")}
             style={styles.logo}
            />
           <TouchableOpacity
            style={[
            styles.button,
            activeButton === 'All' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('All')}
        >
          <Text style={[styles.buttonText, activeButton === 'All' && styles.activeButtonText]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Movies' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('Movies')}
        >
          <Text style={[styles.buttonText, activeButton === 'Movies' && styles.activeButtonText]}>
            Movies
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'TV Shows' && styles.activeButton,
          ]}
          onPress={() => handleButtonPress('TV Shows')}
        >
          <Text style={[styles.buttonText, activeButton === 'TV Shows' && styles.activeButtonText]}>
            TV Shows
          </Text>
        </TouchableOpacity>
          <TouchableOpacity>       
           <Icon 
             name={'person-circle-outline'}
             size={35}
             color="red"
             marginTop={5}
            />
          </TouchableOpacity>
        </View>

         {/* Trending movies carousel */}
        <TrendingMovies data={trending} />

           {/* upcoming movies carousel */}
           <MovieList title = "Upcoming" data={upcoming} />

           {/* topRated movies carousel */}
           <MovieList title = "Top Rated" data={topRated} />

        </ScrollView>

        <ScreenFooter
          showBottomNavigation={!keyboardStatus}
          showAppFooter={!keyboardStatus}
          bottomNavigationOptions={{ icons: icons }}
        />
        {Platform.OS === 'ios' && <KeyboardAvoidingViewCustom />}
     </SafeAreaView>
   
  )
}

export default HomeScreen