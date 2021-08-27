import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getHello(): {
        id: number;
    };
    createUser(): void;
    loginUser(): void;
}
