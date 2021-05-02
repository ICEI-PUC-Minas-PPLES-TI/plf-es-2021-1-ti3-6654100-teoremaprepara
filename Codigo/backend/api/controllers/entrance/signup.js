module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new user account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    fullName:  {
      required: true,
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.',
    },

    role:  {
      required: true,
      type: 'string',
      isIn: ['coordenador', 'professor', 'aluno'],
      example: 'aluno',
      description: 'Cargo do usuário.',
    },

    curso:  {
      required: false,
      type: 'string',
      example: 'aluno',
      description: 'Curso que o aluno participa.',
    },

    disciplinas:  {
      required: false,
      type: ['number'],
      example: [1,2,3],
      description: 'Disciplinas que professor ministra.',
    },

    rg:  {
      required: false,
      type: 'string',
      example: '000.000.00-00',
      description: 'RG do usuário.',
    },

    dataNascimento:  {
      required: false,
      type: 'string',
      example: '2000-12-31',
      description: 'Aniversário do usuário.',
    },

    telefone:  {
      required: false,
      type: 'string',
      example: '(31) 99999-9999',
      description: 'Telefone do usuário.',
    },

  },


  exits: {

    success: {
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function ({emailAddress, password, fullName, role, curso, disciplinas, rg, dataNascimento, telefone}) {

    const newEmailAddress = emailAddress.toLowerCase();

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    const newUserRecord = await User.create(_.extend({
      fullName,
      dataNascimento,
      rg,
      role,
      telefone,
      emailAddress: newEmailAddress,
      password: await sails.helpers.passwords.hashPassword(password),
      tosAcceptedByIp: this.req.ip
    }, sails.config.custom.verifyEmailAddresses? {
      emailProofToken: await sails.helpers.strings.random('url-friendly'),
      emailProofTokenExpiresAt: Date.now() + sails.config.custom.emailProofTokenTTL,
      emailStatus: 'unconfirmed'
    }:{}))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();

    if (role === 'professor' && disciplinas && disciplinas.length > 0) {
      await User.update({ emailAddress: newEmailAddress }, { disciplinas });
    }

    if (role === 'aluno' && curso) {
      await User.update({ emailAddress: newEmailAddress }, { curso });
    }

    // Store the user's new id in their session.
    // this.req.session.userId = newUserRecord.id;

    // In case there was an existing session (e.g. if we allow users to go to the signup page
    // when they're already logged in), broadcast a message that we can display in other open tabs.
    // if (sails.hooks.sockets) {
    //   await sails.helpers.broadcastSessionChange(this.req);
    // }

    if (sails.config.custom.verifyEmailAddresses) {
      // Send "confirm account" email
      await sails.helpers.sendTemplateEmail.with({
        to: newEmailAddress,
        subject: 'Please confirm your account',
        template: 'email-verify-account',
        templateData: {
          fullName,
          token: newUserRecord.emailProofToken
        }
      });
    } else {
      sails.log.info('Skipping new account email verification... (since `verifyEmailAddresses` is disabled)');
    }

  }

};
