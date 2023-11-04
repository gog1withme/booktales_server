import { Authorized, Body, ContentType, Controller, JsonController, Post, Put, UseBefore } from 'routing-controllers';
//import { Service } from 'typedi';
import { json } from 'body-parser';
import { BaseController } from '../core/base.controller';
import { CredintalsInterface } from '../types/interfaces/user.interface';
import { PermissionEnum } from '../types/enums/permissions.enum';
import { UserService } from '../services/sample.service';
//import { UsersModel } from '../models/users.model';

@JsonController('/users')
export class UserController extends BaseController {
  constructor(){
    super('Users');
  }

  @Post('/login')
  @UseBefore(json())
  login(@Body() request: CredintalsInterface) {
    if (request.signinType === 'PASSWORD') {
      const {
        username,
        email,
        phone
      } = request;

      const user = this.model.findOne({})
      .then();

      if (user) {
        // Autheticated User found we need verify the password and genrate the token

      } else {

      }
    } else if (request.signinType === 'OTP') {
      // Genrate the OTP
      // await this._user.genrateAndSaveOtp()
    }
  }

  @Post('/register')
  @UseBefore(json())
  register(@Body() request: CredintalsInterface) {
    console.log(`hhhjh`);

    if (request.signinType === 'PASSWORD') {
      const {
        username,
        email,
        phone
      } = request;

      const user = this.model.build({
        username,
        email,
        phone
      });

      user.save();
    }
  }

  @Authorized(PermissionEnum.AddUser)
  @Post('/create')
  @ContentType("application/json")
  @UseBefore(json())
  create(@Body() request: CredintalsInterface) {
    console.log(`hhhjh`);

    if (request.signinType === 'PASSWORD') {
      const {
        username,
        email,
        phone
      } = request;

      const user = this.model.build({
        username,
        email,
        phone
      });

      user.save();
    }
  }
}