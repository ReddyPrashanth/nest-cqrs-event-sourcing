import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AdminunitsController } from './adminunits.controller';
import { AdminunitsService } from './adminunits.service';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { AdminunitRepository } from './repository/adminunit.repository';

@Module({
  imports: [CqrsModule],
  controllers: [AdminunitsController],
  providers: [
    AdminunitsService,
    ...CommandHandlers,
    ...EventHandlers,
    AdminunitRepository,
  ]
})
export class AdminunitsModule {}
