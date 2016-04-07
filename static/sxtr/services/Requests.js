// Generated by CoffeeScript 1.10.0
(function() {
  var Requests;

  Requests = function($http, $q) {
    var submitFn;
    submitFn = function(httpObj, args) {
      var deffered;
      deffered = $q.defer();
      httpObj.apply(httpObj, args).then(function(response) {
        return deffered.resolve(response != null ? response.data : void 0);
      }, function(response) {
        var errors, ref;
        errors = {
          '__all__': ['Something terrible happened at server side. Could not proceed with your request. Please try again later!!!']
        };
        if (response != null ? (ref = response.data) != null ? ref.errors : void 0 : void 0) {
          errors = response.data.errors;
        }
        return deffered.reject(errors);
      });
      return deffered.promise;
    };
    return {
      get: function() {
        return submitFn($http.get, arguments);
      },
      post: function() {
        return submitFn($http.post, arguments);
      },
      patch: function() {
        return submitFn($http.patch, arguments);
      },
      "delete": function() {
        return submitFn($http["delete"], arguments);
      },
      put: function() {
        return submitFn($http.put, arguments);
      }
    };
  };

  Requests.$inject = ['$http', '$q'];

  angular.module('sxTrApp').factory('Requests', Requests);

}).call(this);
