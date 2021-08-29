"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
const Util_1 = require("../Util/Util");
const user_schema_1 = require("../database/structures/user.schema");
let AuthService = class AuthService {
    constructor(model) {
        this.model = model;
    }
    async findAll() {
        return await this.model.find().exec();
    }
    async findOne(login) {
        return await this.model.findById(login).exec();
    }
    async create(user) {
        return await new this.model(Object.assign(Object.assign({}, user), { password: await Util_1.hashString(user.password) })).save();
    }
    async edit(login, options) {
        return await this.model.updateOne({ login }, Object.assign({}, options)).exec();
    }
    async delete(login) {
        return await this.model.findByIdAndDelete(login).exec();
    }
    async checkPassword(user) {
        const { password } = await this.model.findOne({ login: user.login });
        return !!(await Util_1.checkHashedString(user.password, password));
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map