import { NestFactory } from '@nestjs/core';

import { ReservationsModule } from './reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  //   app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  //   app.useLogger(app.get(Logger));
  //   app.use(cookieParser());
  //   const configService = app.get(ConfigService);
  await app.listen(3000);
}
bootstrap();
