(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(room) {
            rooms.$add(room);
        }

        rooms.addRoom = function(newRoomText) {
            Room.add(newRoomText);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
