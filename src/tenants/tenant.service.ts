import { Injectable } from "@nestjs/common";
import { Tenant } from "./tenant.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TenantsService {
    constructor(@InjectModel('Tenant') private readonly tenantModel: Model<Tenant>) {}

    async findAll() : Promise<Tenant[]> {
        return await this.tenantModel.find().exec();
    }

    async findOne(filter = {}): Promise<Tenant> {
        return await this.tenantModel.findOne(filter).exec();
    }

    async findWhere(subdomain: string): Promise<Tenant[]> {
        return await this.tenantModel.find().where('subdomain', subdomain).exec();
    }
}