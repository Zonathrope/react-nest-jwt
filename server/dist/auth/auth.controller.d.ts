import { AuthService } from "./auth.service";
import { UserDTO } from "../dto/user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(body: UserDTO): Promise<UserDTO>;
    loginUser(body: UserDTO): Promise<Boolean>;
}
