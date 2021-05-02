module.exports = {


    friendlyName: 'show notices',
  
  
    description: 'Show notices to users',
  
  
    inputs: {
  
    

      title:{
        description: 'Titulo do aviso a ser gerado',
        example: 'Envio das nota :28/07',
        required: true

      },
        
      origin:{
        description: 'Origem da Disciplina vinculada',
        example: 'Geografia',
        required: true

      },

      text: {
        description: 'Texto do aviso mostrado',
        example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        required: true
      },
  
    }
  };
  