(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === '') {
            //Do something to allow users to set their username
              $uibModal.open({
              // Modal configuration object properties
              templateUrl: 'templates/userModal.html',
              controller: 'UserModalCtrl as user',
              backdrop: 'static',
              keyboard: false,
              size: 'sm'
            });
        };
    };

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
