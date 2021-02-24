import { ICommand } from '@nestjs/cqrs';
import { CreateAdminunitDto } from './../../dto/create-adminunit.dto';

export class CreateAdminunitCommand implements ICommand {
    constructor(
        public readonly createAdminunitDto: CreateAdminunitDto
    ) {}
}