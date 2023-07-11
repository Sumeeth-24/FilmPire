import OnboardingScreen from "../screens/onboard";
import HomeScreen from "../screens/home";
import MovieDetail from "../screens/moviedetail";
import PersonDetail from "../screens/persondetail";
import SearchMovie from "../screens/search";
import BookMarkOption from "../screens/bookmark";

const screenOptions = {
    headerShadowVisible: true,
    headerTitleAlign: 'center',
  }

const routes = [
    {
        key: 'onBoarding',
        name: 'onBoarding',
        component: OnboardingScreen,
        options: { headerShown: false },
      },
      {
        key: 'home',
        name: 'home',
        component: HomeScreen,
        options: {
          ...screenOptions,
          headerShown: false,
        },
      },
      {
        key: 'movieDetail',
        name: 'movieDetail',
        component: MovieDetail,
        options: {
          ...screenOptions,
          headerShown: false,
        },
      },
      {
        key: 'personDetail',
        name: 'personDetail',
        component: PersonDetail,
        options: {
          ...screenOptions,
          headerShown: false,
        },
      },
      {
        key: 'searchMovie',
        name: 'searchMovie',
        component: SearchMovie,
        options: {
          ...screenOptions,
          headerShown: false,
        },
      },
      {
        key: 'bookMarkOption',
        name: 'bookMarkOption',
        component: BookMarkOption,
        options: { ...screenOptions, title: 'Bookmark',  },
      },
]

export default routes