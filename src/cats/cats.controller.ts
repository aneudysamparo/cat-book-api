import { Controller, UseInterceptors, Post, Body, Get, BadRequestException } from '@nestjs/common';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseInterceptors( TransformInterceptor)
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      try {
       return  this.catsService.create(createCatDto);

      } catch (e) {
       throw new BadRequestException();

      }
    }

    @Get()
    async findAll(): Promise<Cat[]> {
      
      try {
        return this.catsService.findAll();

      } catch (e) {
       throw new BadRequestException();

      }
    }

    // @Get(':id')
    // findOne(@Param('id', new ParseIntPipe()) id) {
    //     // Logic
    // }
    
    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //   return `This action updates a #${id} cat`;
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //   return `This action removes a #${id} cat`;
    // }
}
