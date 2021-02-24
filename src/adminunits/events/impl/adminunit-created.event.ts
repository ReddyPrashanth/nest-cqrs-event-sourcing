import { CreateAdminunitDto } from './../../dto/create-adminunit.dto';
import { IEvent } from "@nestjs/cqrs";

export class AdminunitCreatedEvent implements IEvent {
    constructor(
        public readonly adminunitDto: CreateAdminunitDto
    ) {}
}