import { Logger } from '@nestjs/common';
import { AdminunitCreatedEvent } from './../impl/adminunit-created.event';
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AdminunitCreatedEvent)
export class AdminunitCreatedHandler implements IEventHandler<AdminunitCreatedEvent> {
    handle(event: AdminunitCreatedEvent) {
        Logger.log(event.adminunitDto, 'AdminunitCreatedEvent');
    }
}