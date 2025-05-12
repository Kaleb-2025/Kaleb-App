import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  body:{
       backgroundColor: '#f8faf0',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8faf0',
    paddingHorizontal: 30,
    paddingVertical: 32,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
  },
 header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8faf0',
    paddingHorizontal: 30,
    paddingVertical: 12,
    width: '100%',
    alignSelf: 'center',
  },

  backButton: {
    width: 15,
    height: 15,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressIcon: {
    width: 27,
    height: 22,
  },
  progressText: {
    fontSize: 15,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
  },
 highlight: {
    color: 'rgba(11, 22, 88, 1)',
  },
  question: {
    color: 'black',
    fontSize: 15,
    width: 282,
    paddingTop: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginTop: 20,
    display:'flex',
  },
  quizOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
    maxWidth: 250,
  },
  radioButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 15,
    height: 15,
  },
  radioButtonSelected: {
    backgroundColor: 'rgba(8, 12, 46, 1)',
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: 'black',
  },
  nextButton: {
    borderRadius: 20,
    backgroundColor: 'rgba(8, 12, 46, 1)',
    marginTop: 20,
    width: 200,
    maxWidth: '100%',
    padding: 11,
    alignSelf: 'center',
  },
  nextButtonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    width: 284,
    alignSelf: 'center',
  },
  dica:{
    color:'#0B1658'
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default css;
