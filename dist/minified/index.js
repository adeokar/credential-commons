"use strict";var UCA=require("./uca/UserCollectableAttribute"),VC=require("./creds/VerifiableCredential"),_require=require("./services/index"),initServices=_require.initServices;function CredentialCommons(a,b){return a&&initServices(a),b&&initServices(b),this.UCA=UCA,this.VC=VC,this}module.exports=new CredentialCommons;