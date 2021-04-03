module.exports = {
  friendlyName: 'Signup',

  description: 'Criação de uma nova conta de usuario',

  inputs: {
    email: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'Email do usuario',
      maxLength: 200,
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'senha123',
      escription: 'Senha do usuario',
    },

    fullName: {
      required: true,
      type: 'string',
      example: 'Karl Marx de Jesus',
      maxLength: 120,
      description: 'O nome completo do usuário',
    },

    userType: {
      required: true,
      type: 'string',
      isIn: ['professor','diretor', 'aluno', 'externo' ],
      description: 'Tipo do usuario na plataforma',
    }
  },

  exits: {
    sucess: {
      description: 'Nova conta criada com sucesso',
      statusCode: 201,
      responseType: '<Tipo de resposta que será dada ao cliente>'
      //aqui é possivel redirecionar para outra página
    },

    invalid: {
      responseType: 'badRequest',
      statusCode: 400,
      description: 'Os dados fornecidos são invalidos!',
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'O e-mail fornecido já está em uso'
    },

    requestIsNotAdmin: {
      statusCode: 403,
      description: 'Somente um administrador pode executar a ação'
    },
  },

  fn: async function ({emailAdress, password, fullName, userType}){
    /* Verificar se a requisição veio de um admin */
    if(!this.req.user.isSuperAdmin) { throw 'requestIsNotAdmin'; }
    
    var email = emailAdress.toLowerCase();
    
    await User.create(({
      fullName,
      email,
      password: await sails.helpers.passwords.hashPassword(password),
      userType,
    }))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid');

    // Intercept: interceptar erros gerados pelo ORM
    //E_UNIQUE: captura erros gerados atráves de conflitos de atributos unicos
    //UsageError: dados invalidos

  }

}