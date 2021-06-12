import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*"
  });

  await app.listen(3000);
}
bootstrap()
  .then(_ => console.log("Listening on port 3000"));
