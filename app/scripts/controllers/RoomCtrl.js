(function() {
    function RoomCtrl($uibModal) {
        var room;

        room.newRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', RoomCtrl]);
})();
