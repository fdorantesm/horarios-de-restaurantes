var app,base;base=document.body.attributes.rel.value,app=angular.module("yapp",["ngRoute"]),app.config(["$routeProvider","$locationProvider","$httpProvider",function(e,t,a){return a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",e.when("/restaurantes",{controller:"RestaurantesController",templateUrl:base+"/assets/templates/restaurantes/list.html"}).when("/restaurantes/add",{controller:"RestaurantController",templateUrl:base+"/assets/templates/restaurantes/edit.html"}).when("/restaurantes/edit/:id",{controller:"RestaurantController",templateUrl:base+"/assets/templates/restaurantes/edit.html"}).otherwise("/restaurantes")}]);