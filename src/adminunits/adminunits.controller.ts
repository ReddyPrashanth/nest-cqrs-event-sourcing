import { AdminunitsService } from './adminunits.service';
import { CreateAdminunitDto } from './dto/create-adminunit.dto';
import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('adminunits')
export class AdminunitsController {
    private readonly logger = new Logger(AdminunitsController.name);

    constructor(
        private readonly adminunitsService: AdminunitsService
    ) {}

    @Post('')
    async createAdminunit(@Body() createAdminunitDto: CreateAdminunitDto) {
        this.logger.log(`creating logger, ${JSON.stringify(createAdminunitDto)}`);
        return await this.adminunitsService.createAdminunit(createAdminunitDto);
    }
}
