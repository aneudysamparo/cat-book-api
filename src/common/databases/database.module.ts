import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";
import { TenantModule } from "../tenants/tenant.module";


@Module({
    imports: [TenantModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})

export class DatabaseModule {}