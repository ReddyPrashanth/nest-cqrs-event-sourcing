import { CreateAdminunitCommand } from './commands/Impl/create-adminunit.command';
import { CreateAdminunitDto } from './dto/create-adminunit.dto';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class AdminunitsService {
    constructor(
        private readonly commandBus: CommandBus
    ) {}

    async createAdminunit(createAdminUnitDto: CreateAdminunitDto) {
        return await this.commandBus.execute(
            new CreateAdminunitCommand(createAdminUnitDto)
        );
    }
}
