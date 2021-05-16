<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}" >
    <title>Laravel Realtime Chat</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        .list-group {
            overflow: scroll;
            height: 250px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row" id="app">
            <div class="offset-3 col-6">
                <li class="list-group-item active">Chat Room</li>
                <ul class="list-group" v-chat-scroll>
                    <message-component
                        v-for="(value, index) in chat.message"
                        :key="index"
                        :color="chat.colors[index]"
                        :text = "value"
                        :user = "chat.user[index]"
                    >
                </message-component>
                </ul>
                <input type="text" name="" id="" class="form-control" placeholder="type your message" v-model="message" @keyup.enter="send">
            </div>
        </div>
    </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>