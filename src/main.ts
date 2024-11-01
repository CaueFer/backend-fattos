import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Backent Fattos")
    .setDescription("API Fattos Technical Challeng, connected with PostgreSQL")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove propriedades não definidas no DTO
    forbidNonWhitelisted: true, // proíbe propriedades não definidas no DTO
    transform: true
}));

  const port = process.env.DB_PORT || 5000;

  await app.listen(port, () => {
    console.log("Server Nest On: ", port);
  });
}
bootstrap();