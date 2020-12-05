// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'https://cart-gct.herokuapp.com/',
  firebase:{
    apiKey: "AIzaSyDpi8iLgJ05FWPNMS4fr4awbLR9qkvHcm0",
    authDomain: "cart-gct.firebaseapp.com",
    databaseURL: "https://cart-gct.firebaseio.com",
    projectId: "cart-gct",
    storageBucket: "cart-gct.appspot.com",
    messagingSenderId: "453372877435",
    appId: "1:453372877435:web:237a38baa49483399b60de"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
