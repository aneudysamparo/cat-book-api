import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const tenantDB: string = req.subdomains[0];
    const url = req.baseUrl;
    const method = req.method;
    const ip = req.connection.remoteAddress;
    const timeStamp = new Date();

    console.log(`TenantID ${tenantDB} is requested by ${ip} with ${url} with HTTP method /${method} at ${timeStamp}` );
    console.log('Request...');
    //console.log(req);
    next();
  }
}
