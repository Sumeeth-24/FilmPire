import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#04020d',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  safeAreaView: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginLeft: 10,
  },
  background: {
    borderRadius: 10,
    padding: 1,
    backgroundColor: '#e00d0d'
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
  },
  playicon: {
    color: '#e00d0d',
    fontSize: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 16,
  },
  detailsText: {
    color: '#888888',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  genreText: {
    color: '#e00d0d',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 8,
  },
  descriptionText: {
    color: '#888888',
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 16,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
});

export default styles;