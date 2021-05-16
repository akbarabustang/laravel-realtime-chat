<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use App\Events\Chat;
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
        event(new Chat($request->message,$user));
    }

    public function saveToSession(Request $request)
    {
        session()->forget('chat');
        session()->put('chat', $request->session);
    }

    public function savedSession()
    {
        return session()->get('chat');
        // return session()->get('chat');
    }
}
