import { CreateAdminunitDto } from './../dto/create-adminunit.dto';
import { AdminunitCreatedEvent } from './../events/impl/adminunit-created.event';
import { AggregateRoot } from "@nestjs/cqrs";

export class AdminunitModel extends AggregateRoot {
    [x: string]: any;

    constructor(private readonly id: string | undefined) {
        super();
    }

    setData(data: CreateAdminunitDto) {
        this.data = data
    }

    createAdminunit() {
        this.apply(new AdminunitCreatedEvent(this.data));
    }
}