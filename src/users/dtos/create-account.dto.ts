import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Users } from '../entities/user.entity';
import { MutationOutput } from 'src/common/dtos/output.dto';

@InputType()
export class CreateAccountInput extends PickType(Users, [
  'email',
  'password',
  'role',
]) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {}
