/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',     //as solicitações de todas rotas devem vir de usuario autenticado.

  // 'entrance/signup' : 'is-super-admin', //a solicitação de signup deve vir de um usuario administrador.

  //Se true, irão ignorar a politca, se false não vão ignorar.

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true, 
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

};
