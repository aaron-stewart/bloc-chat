(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
        this.createUsername = function() {
            $cookies.put('blocChatCurrentUser', this.name);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();
