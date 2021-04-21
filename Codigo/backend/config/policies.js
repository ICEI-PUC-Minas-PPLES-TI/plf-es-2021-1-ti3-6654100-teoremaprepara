/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 *
 *
 * Valores possíveis:
 * -> true: qualquer usuário pode acessar a rota
 * -> false: nenhum usuário pode acessar a rota
 * -> is-logged-in: qualquer usuário logado pode acessar a rota
 * -> is-super-admin: somente usuários administradores podem acessar a rota
 */

module.exports.policies = {

  // Negar acesso para todas as rotas por padrão
  '*': true, //false

  // Autorizar rotas de login/signup/logout
  // 'entrance/*': true,
  // 'account/logout': true,
  // 'entrance/signup': true, // 'is-super-admin'

  // Rotas do Blueprints
  // 'user/*': true,
  // 'curso/*': true,
  // 'disciplina/*': true,

  // Bypass the `is-logged-in` policy for:
  // 'view-homepage-or-redirect': true,
  // 'view-faq': true,
  // 'view-contact': true,
  // 'legal/view-terms': true,
  // 'legal/view-privacy': true,
  // 'deliver-contact-form-message': true,

};
