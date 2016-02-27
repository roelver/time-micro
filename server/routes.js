/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
//  console.log(app);
  // Insert routes below
  app.use('/', require('./api'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
