import { IsDateString, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateAdminunitDto {
    @IsUUID()
    id: string;

    @IsUUID()
    organizationUnitID: string;

    @IsUUID()
    sourceEntityID: string;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsString()
    comment: string;

    @IsDateString()
    createdDate: string;

    @IsString()
    createdBy: string;

    @IsDateString()
    updatedDate: string;

    @IsString()
    updatedBy: string;

    @IsDateString()
    syncDate: string;
}