import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  scrollView: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  castItem: {
    marginRight: 8,
    alignItems: 'center',
  },
  castImageContainer: {
    overflow: 'hidden',
    borderRadius: 50,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#888888',
  },
  castImage: {
    borderRadius: 16,
    height: 86,
    width: 70,
  },
  characterText: {
    color: 'white',
    fontSize: 10,
    marginTop: 2,
  },
  originalNameText: {
    color: '#888888',
    fontSize: 10,
  },
});

export default styles;