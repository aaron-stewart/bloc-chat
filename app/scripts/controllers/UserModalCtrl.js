(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.createUsername = function(userName) {
            $cookies.put('blocChatCurrentUser', userName);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();
