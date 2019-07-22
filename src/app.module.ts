import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TenantModule } from './common/tenants/tenant.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [TenantModule, CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}