<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}" >
    <title>Laravel Realtime Chat</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row" id="app">
            <ul class="list-group offset-4 col-4">
                <li class="list-group-item active">Chat Room</li>
                <li class="list-group-item">Hola</li>
                <li class="list-group-item">Hola</li>
                <li class="list-group-item">Hola</li>
                <li class="list-group-item">Hola</li>
                <input type="text" name="" id="" class="form-control" placeholder="type your message">
            </ul>
        </div>
    </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>