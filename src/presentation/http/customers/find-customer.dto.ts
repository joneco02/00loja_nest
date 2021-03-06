import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsUUID, Length } from 'class-validator';
import { CustomerAddress, IdentificationType } from '@prisma/client';

export namespace FindCustomerDto {
  export class Request {
    @ApiProperty({
      required: true,
      example: '057e0255-e3fa-4a6f-8101-510c8e6b060b',
      description: 'Customer uuid'
    })
    @IsUUID()
    id: string;
  }
  export class Response {
    id: string;
    user_id: string;
    identification: string;
    identification_type: IdentificationType;
    customers_addresses?: CustomerAddress[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }
}
