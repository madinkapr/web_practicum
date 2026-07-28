import { DocumentBuilder } from "@nestjs/swagger";

export const config = new DocumentBuilder()
    .setTitle('NajotEdu')
    .setDescription('crm platform')
    .setVersion('1.0')
    .build();

