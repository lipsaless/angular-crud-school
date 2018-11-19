// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCCkDAB0z7oKW4lrj1YmBERwh9k6bUA688',
    authDomain: 'sistema-login-w.firebaseapp.com',
    databaseURL: 'https://sistema-login-w.firebaseio.com',
    projectId: 'sistema-login-w',
    storageBucket: 'sistema-login-w.appspot.com',
    messagingSenderId: '636939460632'
  }
};
