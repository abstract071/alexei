import { SignupRepository } from './signup.repository';
import { CreateAccountDto } from './dtos/create-account.dto';

export class SignupService {
  accountsRepo: SignupRepository;

  constructor() {
    this.accountsRepo = new SignupRepository();
  }

  findOne(id: string) {
    return this.accountsRepo.findOne(id);
  }

  findAll() {
    return this.accountsRepo.findAll();
  }

  create(account: CreateAccountDto) {
    return this.accountsRepo.create(account);
  }
}
