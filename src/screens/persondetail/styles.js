import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  safeAreaView: {
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginVertical: 20,
    marginLeft: 10,
  },
  background: {
    borderRadius: 10,
    padding: 1,
    backgroundColor: '#e00d0d'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 1,
  },
  customShadow: {
    shadowColor: 'gray',
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 1,  
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    height: 400,
    width: 400,
    borderColor: 'neutral-500',
    borderWidth: 2,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  placeOfBirthText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
  infoContainer: {
    margin: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#888888',
    padding: 16,
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 100,
  },
  infoItem: {
    borderRightWidth: 2,
    borderRightColor: 'neutral-400',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    color: 'white',
  },
  infoValueText: {
    color: 'white',
    fontSize: 12,
  },
  biographyContainer: {
    marginVertical: 12,
    marginHorizontal: 20,
    paddingVertical: 8,
  },
  biographyTitle: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  biographyText: {
    color: '#888888',
    letterSpacing: 1,
  },
});

export default styles;