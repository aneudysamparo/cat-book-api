import * as mongoose from 'mongoose';
import { REQUEST } from '@nestjs/core';
import { Scope, NotFoundException } from '@nestjs/common';
import { TenantsService } from '../../tenants/tenant.service';


export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        scope: Scope.REQUEST,
        useFactory: async  (req, tenants: TenantsService): Promise<typeof mongoose> => {
            if (req.subdomains[0] && req.subdomains[0] != undefined && req.subdomains[0] != 'undefined'){
                const tenantDB: string = req.subdomains[0];
                let foundTenant = await tenants.findOne({subdomain: tenantDB});
                if (!foundTenant){
                    throw new NotFoundException('AppName does not exits');
                }
                // Check if is actived
                console.log(foundTenant);
                return mongoose.connect(`mongodb://localhost/${foundTenant.tenantdb}`, { useNewUrlParser: true })
            } else {
                return mongoose.connect(`mongodb://localhost/TodoAppDB`, { useNewUrlParser: true })
            }
        },
        inject: [REQUEST, TenantsService]
    }
];