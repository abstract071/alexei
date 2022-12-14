import { readFile, writeFile } from 'fs/promises';

import { CreateAccountDto } from './dtos/create-account.dto';

export class SignupRepository {
  async findOne(id: string) {
    const content = await readFile('accounts.json', 'utf8');
    const accounts = JSON.parse(content);

    return accounts[id];
  }

  async findAll() {
    const content = await readFile('accounts.json', 'utf8');
    const accounts = JSON.parse(content);

    return accounts;
  }

  async create(word: CreateAccountDto) {
    const content = await readFile('accounts.json', 'utf8');
    const accounts = JSON.parse(content);
    const id = Math.floor(Math.random() * 999);

    accounts[id] = word;

    await writeFile('accounts.json', JSON.stringify(accounts));
  }
}
