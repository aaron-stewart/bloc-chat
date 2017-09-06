(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        Message.send = function(newMessage, roomId) {
            //send method logic
            messages.$add({
                username: $cookies.get('blocChatCurrentUser'),
                message: newMessage,
                datetime: firebase.database.ServerValue.TIMESTAMP,
                roomId: roomId
            });
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})()
