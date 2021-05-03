module.exports = {

  friendlyName: 'Criar curso',
  description: 'Cria um novo curso e disciplinas associadas ao curso',

  inputs: {
    nome:  {
      required: true,
      type: 'string',
      example: 'Pré-Enem',
      description: 'Curso que o aluno participa.',
    },

    descricao:  {
      required: false,
      type: 'string',
      example: '2020.1',
      description: 'Descrição do curso.',
    },

    disciplinas:  {
      required: false,
      type: ['string'],
      example: ['Redação', 'Matemática'],
      description: 'Disciplinas a serem associadas ao curso.',
    },
  },

  exits: {

  },


  fn: async function ({nome, descricao, disciplinas}) {

    const newCursoRecord = await Curso.create({
      nome,
      descricao,
    }).fetch();

    if (disciplinas) {
      for (let index = 0; index < disciplinas.length; index++) {
        const disciplina = disciplinas[index];
        await Disciplina.create({
          nome: disciplina,
          curso: newCursoRecord.id,
        });
      }
    }

    // All done.
    return newCursoRecord;

  }


};
