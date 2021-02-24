import { CreateAdminunitDto } from './../dto/create-adminunit.dto';
import { Injectable } from "@nestjs/common";
import { AdminunitModel } from "../models/adminunit.model";

@Injectable()
export class AdminunitRepository {
    async createAdminUnit(adminunitDto: CreateAdminunitDto){
        const adminunit = new AdminunitModel(adminunitDto.id);
        adminunit.setData(adminunitDto);
        adminunit.createAdminunit();
        return adminunit;
    }
}