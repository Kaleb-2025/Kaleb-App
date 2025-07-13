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
    fontSize: 24,
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
    bottom: '-50',
    left: '-30', 
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
  },
  kalebImagem: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },

  balao: {
  backgroundColor: 'white',
  borderRadius: 15,
  padding: 12,
  maxWidth: 280,
  marginBottom: 270,
  marginLeft: 100,
  position: 'relative',
  borderWidth: 2,
  borderColor: '#000',
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
    color: '#FFFFFF',
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
    width: 40,
    marginHorizontal: 8,
    color: '#fff',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
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
  width: '90%',   
},

option: {
  paddingVertical: 10,
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


});

export default stylesP;