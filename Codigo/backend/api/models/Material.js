/**
 * Avisos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {
 
   attributes: {
 
     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
 
     titulo: { type: 'string' },
     tipo: { type: 'string' },
     data: { type: 'string' },
     url: { type: 'string' },
 
     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
     disciplina: {
       model: 'disciplina'
     },
   }, 
 };
 