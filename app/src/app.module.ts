import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MathMicroserviceModule } from './math-microservice/math-microservice.module';

@Module({
  imports: [MathMicroserviceModule],
  controllers: [AppController],
})
export class AppModule {}
