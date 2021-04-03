
module.exports = {
  tableName : '<nome-da-tabela-no-banco>', 

  attributes: {
    email: {
      type: 'string',
      required: true,
      description: 'Email do usuario',
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'guilherme@gmail.com',
      columnName: '<nome-da-coluna-no-banco>',
    },

    //Criptografar senha no controller
    password: {
      type: 'string',
      required: true,
      description: 'Senha do usuario',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad',
      columnName: '<nome-da-coluna-no-banco>',
    },

    fullName: {
      type: 'string',
      required: true,
      description: 'Nome completo do usuario',
      maxLength: 120,
      example: 'Karl Marx de Jesus',
      columnName: '<nome-da-coluna-no-banco>',
    },


//validar regra de negocio no controller: Um Aluno nunca poderá ser um admin
    isSuperAdmin: {
      type: 'boolean',
      description: 'Se o usuario é um Admin',
      columnName: '<nome-da-coluna-no-banco>',
    },
    
    //O isIn define que só será aceito uma dessas strings
    //Deverá ser feita validação no controller
    userType: {
      type: 'string',
      description: 'Tipo do usuario na plataforma',
      required: true,
      isIn: ['professor','diretor', 'aluno', 'externo' ],
      columnName: '<nome-da-coluna-no-banco>',
    },

    //allow null: faz com que seja aceito valor null
    //defaultsTo: o valor inicial será null
    avatar: {
      type: 'string',
      description: 'Link de uma foto para avatar do usuario',
      allowNull: true, 
      defaultsTo: null,
      columnName: '<nome-da-coluna-no-banco>',
    }
  },
};