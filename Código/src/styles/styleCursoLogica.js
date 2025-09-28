import { StyleSheet } from 'react-native';

const stylesP = StyleSheet.create({
  // STYLE DA TELA DINAMICA
  containerAzul: {
    backgroundColor: '#0B1658',
    borderRadius: 16,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
    width: '90%',
    minHeight: '82%',
    justifyContent: 'space-between', 
  },
  containerNormal: {
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
    width: '90%',
    minHeight: '82%',
    justifyContent: 'space-between', 
    
  },
  tituloBranco: {
    color: '#ffffff',
    fontFamily: 'galindo-font',
  },
    tituloPreto: {
    color: '#000',
    fontFamily: 'galindo-font',
  },
  textoBranco: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'flex-start',
    marginTop: 20,
    marginBottom: 30,
  },
    textoPreto: {
    color: '#000',
    fontSize: 17,
    textAlign: 'center',
    textAlignVertical: 'flex-start',
    marginTop: 10,
    marginBottom: 30,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1, 
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  enunciado: {
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#0B1658',
    fontSize: 16,
    marginBottom: 20,
  },

  // STYLES DO COMPONENTE KALEB

  containerKaleb: {
    position: 'absolute',
    bottom: -50,
    left: -30,
  },
  kalebContainer: {
    position: 'absolute',
    bottom: 0,
    width: 250,
    height: 250,
    borderRadius: 120.5,
    backgroundColor: '#080C2E',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFBE0A',
    zIndex: 1,
  },
  kalebImagem: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    zIndex: 1,
  },

  balao: {
  backgroundColor: 'white',
  borderRadius: 15,
  padding: 12,
  maxWidth: 280,
  marginBottom: 230,
  marginLeft: 120,
  position: 'relative',
  borderWidth: 2,
  borderColor: '#000',
  zIndex: 2,
},

trianguloBorda: {
  position: 'absolute',
  bottom: -12, 
  left: 20,
  width: 0,
  height: 0,
  borderLeftWidth: 12,
  borderRightWidth: 12,
  borderTopWidth: 12,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: '#000', 
  zIndex: 2,
},

triangulo: {
  position: 'absolute',
  bottom: -10,
  left: 22,
  width: 0,
  height: 0,
  borderLeftWidth: 10,
  borderRightWidth: 10,
  borderTopWidth: 10,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: 'white', 
  zIndex: 3,
},

  falaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

//  STYLE DO COMPONENTE DE COMPLETECODE
  containerComputador: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textoA: {
    color: '#FFD700',
    fontSize: 16,
  },
  textoD: {
    color: '#FFD700',
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#0A8DFF',
    width: 40,
    marginHorizontal: 8,
    color: '#0A8DFF',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
    editorBase: {
    width: 300,
    height: 10,
    backgroundColor: '#d1d5db',
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

    buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 20,
  },
    editorContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#d1d5db',
    width: 360,
    position: 'relative',
    minHeight: 100,
  },
  editorBorder: {
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 10,
    padding: 2,
    flexGrow: 1, 
  },
  editorInnerBorder: {
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 10,
    flexGrow: 1,
  },
  editorContent: {
    backgroundColor: '#2B2E28',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    flexGrow: 1,
  },
  editorHeaderTextEnd: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  // STYLE DO COMPONENTE CUSTOM BUTTON
  textBase: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  amarelo: {
    backgroundColor: '#FFBE0A',
  },
  azul: {
    backgroundColor: '#0B1658',
  },
  textPreto: {
    color: '#000000',
  },
  textBranco: {
    color: '#FFFFFF',
  },
containerButton: {
  width: '100%',
},
alignRight: {
  alignItems: 'flex-end',
},
alignCenter: {
  alignItems: 'center',
},

// STYLE MULTIPLE OPTION
optionsContainer: {
  alignSelf: 'center',   
  justifyContent: 'center',
  width: '100%',   
},

option: {
  paddingVertical: 5,
  paddingHorizontal: 16,
  marginVertical: 6,
  borderRadius: 8,
},

optionContent: {
  flexDirection: 'row',
  alignItems: 'center',
},

optionCircle: {
  width: 22,
  height: 22,
  borderRadius: 11,
  borderWidth: 2,
  borderColor: '#0B1658',
  backgroundColor: 'white',
  marginRight: 12,
  justifyContent: 'center',
  alignItems: 'center',
},

optionCircleSelected: {
  backgroundColor: '#0B1658',
  borderColor: '#0B1658',
},

optionCircleInner: {
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: 'white',
},

optionText: {
  flex: 1,
  fontSize: 16,
  color: '#0B1658',
  lineHeight: 22,
  textAlign: 'left',
  fontWeight: '500',
},


// COMPONENTE DE RESPOSTAS CERTAS (RIGHT ANSWER COMPONENT)
greenContainer: {
  backgroundColor: 'rgba(18,114,55,0.55)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
},
xpText:{
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold', 
},
caixa: {
 position: 'absolute',
  top: 0, 
  left: 0,
  right: 0,
  alignItems: 'center',
  zIndex: 999,
},
continueButton: {
  backgroundColor: '#12721A',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 50, 
  marginTop: 15,
  zIndex: 999,
},
containerProgress: {
  justifyContent: 'center',
  alignItems: 'center',
  width:'100%',
  position: 'absolute',
  bottom: 0,
  zIndex: '0',
},
insideProgress:{
  width:'100%',
  backgroundColor: '#0B1658',
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
insideProgress2:{
  width:'100%',
  backgroundColor: '#080C2E',
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
containerKaleb2: {
    position: 'absolute',
    bottom: '-40',
    left: '-45', 
    zIndex: '1',
  },
kalebContainer2: {
    position: 'absolute',
    bottom: 0,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#080C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
kalebImagem2: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },

// COMPONENTE DE RESPOSTAS ERRADAS (WRONG ANSWER COMPONENT)
redContainer: {
  backgroundColor: 'rgba(152,12,12,0.55)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
},
tryButton: {
  backgroundColor: '#CF0000',
  alignItems: 'center',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 50,
  marginTop: 15,
},
insideText: {
  alignItems: 'center',
}

});

export default stylesP;