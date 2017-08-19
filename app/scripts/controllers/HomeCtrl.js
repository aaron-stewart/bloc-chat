(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.showModal = function() {
            //open the modal
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
