import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantsService } from './tenant.service';
import { TenantSchema } from './tenant.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/TodoAppDB',  { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Tenant', schema: TenantSchema }])
  ],
  providers: [TenantsService],
  exports: [TenantsService]
})
export class TenantModule {}
