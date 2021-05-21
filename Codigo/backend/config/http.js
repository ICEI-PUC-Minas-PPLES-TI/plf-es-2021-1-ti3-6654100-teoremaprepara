/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieSameSiteHandler',
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

    cookieSameSiteHandler: function(req, res, next) {
      onHeaders(res, function() {
        const currentCookieSets = res.get('set-cookie');

        if (currentCookieSets && currentCookieSets.length) {
          for (let i = 0; i < currentCookieSets.length; i++) {
            let currentCookieSet = currentCookieSets[i];
            if (sails.config.session.cookie.secure) {
              currentCookieSet += '; Secure; SameSite=None';
            } else {
              currentCookieSet += '; SameSite=Strict';
            }
            currentCookieSets[i] = currentCookieSet;
          }
          res.setHeader('set-cookie', currentCookieSets);
        }
      });
      return next();
    }

  },

};
