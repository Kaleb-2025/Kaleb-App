import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  quizContainer: {
    flexGrow: 1,
    backgroundColor: '#f8faf0',
    paddingBottom: 32,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  highlight: {
    color: 'rgba(11, 22, 88, 1)',
  },
  question: {
    width: 225.6,
    alignSelf: 'center',
    fontSize: 13.6,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  codeContainer: {
    width: 248.8,
    height: 232.8,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    marginVertical: 16,
    alignSelf: 'center',
    backgroundColor: '#d9d9d9',
  },
  codeWrapper: {
    width: 203.2,
    height: 178.4,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    position: 'absolute',
    top: 23.2,
    left: 24,
    backgroundColor: '#2b2e28',
    padding: 16,
  },
  codeContent: {
    color: '#70b063',
    fontSize: 12.8,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  yellow: {
    color: '#ffbe0a',
  },
  blue: {
    color: '#42b8d2',
  },
  green: {
    color: '#70b063',
  },
  optionsContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  option: {
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionCircleSelected: {
    backgroundColor: '#0B1658',
    borderColor: '#0B1658',
  },
  optionCircleInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#0B1658',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    lineHeight: 19.2,
  },
  footer: {
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
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
  dica:{
 
    paddingHorizontal:20,
       color:'#0B1658',
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


export default styles;
