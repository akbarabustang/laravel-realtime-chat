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

    public function send()
    {
        $msg = 'hai';
        $user = User::find(Auth::id());

        $d = event(new Chat('haii',$user));
        dd($d);
    }
}
