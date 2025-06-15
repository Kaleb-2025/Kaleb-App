import { StyleSheet } from 'react-native';

export const Styleprogress = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 420,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 55,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#f8faf0',
  },
  welcomeText: {
  fontSize: 16,
  marginTop: 50,
  marginBottom: 10,
  textAlign: 'left',
  width: '100%',
},

  radioOption: {
   
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioCircleSelected: {
    borderColor: '#080C2E',
  },
  selectedDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#080C2E',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  radioLabelSelected: {
    color: '#080C2E',
    fontWeight: 'bold',
  },
 
  logoContainer: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'flex-start',
    gap: 6,
  },
  logoImage: {
    marginTop: 10,
    aspectRatio: 1.22,
    width: 55,
  },
  logoText: {
    fontWeight: 'bold',
    flexGrow: 1,
    fontSize: 40,
    color: '#000',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderWidth: 1,
    borderColor: 'rgba(206, 206, 206, 1)',
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  inputField: {
    padding: 0,
    fontSize: 12,
    color: '#000',
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: '#080C2E',
    marginTop: 20,
    padding: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  
  footer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#f8faf0',
    alignItems: 'center',
  },

  footerText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    width: 284,
    alignSelf: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});