(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        this.messages = {};
        this.selectedRoomName = 'Select a room first...';
        this.showModal = function() {
            //open the modal
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }

        this.selectRoom = function(room) {
            this.messages = Message.getByRoomId(room.$id);
            this.selectedRoom = room;
        }

        this.send = function() {
            Message.send(this.newMessage, this.selectedRoom.$id);
            this.newMessage = "";
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
