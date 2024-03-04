import { Injectable, Post } from "@nestjs/common";

@Injectable({})// para servicos
export class AuthService {
    signup() {
        return  {msg: 'I have signed up'};
    }

    signin() {
        return {msg: 'I have signed in'};
    }

}