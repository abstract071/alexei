import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { CreateAccountDto } from './dtos/create-account.dto';
import { SignupService } from './signup.service';

@Controller('accounts')
export class SignupController {
  accountsService: SignupService;

  constructor() {
    this.accountsService = new SignupService();
  }

  @Get('/:id')
  getAccount(@Param('id') id: string) {
    const account = this.accountsService.findOne(id);

    if (!account) {
      throw new NotFoundException('account is not found');
    }

    return account;
  }

  @Post()
  createAccount(@Body() body: CreateAccountDto) {
    return this.accountsService.create(body);
  }

  @Get()
  getAccounts() {
    return this.accountsService.findAll();
  }
}
