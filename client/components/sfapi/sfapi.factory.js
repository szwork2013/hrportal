'use strict';

angular.module('hrportalApp').factory('sfApi', function sfApiFactory($http, $resource, Auth) {

	var menu = null;
	var url = "https://salesdemo4.successfactors.com/login?company=acejmw&username=admin&password=Arago0000";
	var hash = "";
    var me = null;
    var todo = null;
    var logged = false;

    this.me = function(){
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

    this.todo = function(){
        if(!Auth.isLoggedIn()){
            todo = function(){};
            todo.success = function(){};
        }else{
            if(!logged){
                todo = $http.get("api/sf/Todo?$orderby=categoryId%20desc&$key="+Auth.getSfUser());
            }
        }
        return todo;
    }
    return this;
});