$(document).ready(function() {
    /*
    var widget = new Auth0({
        // All this properties are set on auth0-variables.js
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID,
        callbackURL: AUTH0_CALLBACK_URL,
        callbackOnLocationHash: false
    });

    $('.btn-login').click(function(e) {
      e.preventDefault();
      //widget.signin();
      widget.login({
        connection: 'google-oauth2'
      });
    });
    */

var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
lock.show({
  callbackURL: AUTH0_CALLBACK_URL
});

});
