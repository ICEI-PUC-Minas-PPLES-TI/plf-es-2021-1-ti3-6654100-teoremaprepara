/**
 * Simulado.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 const Curso = require("./Disciplina");

 module.exports = {
 
   attributes: {
 
     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
 
     nome: { type: 'string' },
 
     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
     disciplina: {
       model: 'disciplina'
     }  
   }, 
 };
 