(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.roomService = Room;

        this.closeModal = function() {
            $uibModalInstance.close();
        };

        this.submit = function() {
            if(this.text) {
                this.roomService.add(this.text);
                this.text = '';
                $uibModalInstance.close();
            };
        };
    };




    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
