import { AdminunitRepository } from './../../repository/adminunit.repository';
import { Logger } from '@nestjs/common';
import { CreateAdminunitCommand } from './../Impl/create-adminunit.command';
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(CreateAdminunitCommand)
export class CreateAdminunitHandler implements ICommandHandler<CreateAdminunitCommand> {
    private readonly logger = new Logger(CreateAdminunitHandler.name);
    constructor(
        private readonly repository: AdminunitRepository,
        private readonly publisher: EventPublisher
    ){}

    async execute(command: CreateAdminunitCommand): Promise<{}> {
        const {createAdminunitDto} = command;
        this.logger.log(`CreateAdminunitHandler, ${JSON.stringify(createAdminunitDto)}`);
        const user = this.publisher.mergeObjectContext(
            await this.repository.createAdminUnit(createAdminunitDto)
        );
        user.commit();
        return {success: true};
    }
}