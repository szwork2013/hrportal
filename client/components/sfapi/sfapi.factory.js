'use strict';

angular.module('hrportalApp').factory('sfApi', function sfApiFactory($http, $resource, Auth) {

	var menu = null;
	var url = "https://salesdemo4.successfactors.com/login?company=acejmw&username=admin&password=Arago0000";
	var hash = "";
    var me = null;
    var logged = false;

    this.update = function(){
        if(!Auth.isLoggedIn()){
            me = function(){};
            me.success = function(){};
            logged = false;
        }else{
            if(!logged){
                me = $http.get("api/sf/User('" +  Auth.getSfId() +"')?$select=lastName,firstName,userId&$key="+Auth.getSfUser());
                logged=true;
            }
        }
        return me;
        
    }
    return this;
});