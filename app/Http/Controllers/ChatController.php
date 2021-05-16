<?php

namespace App\Http\Controllers;

use App\Model\User;
// use App\Events\Chat
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function chat()
    {
        return view('chat');
    }

    public function send(Request $request)
    {
        $user = User::find(Auth::id());

        event(new Chat($request->message, $user));
    }
}
