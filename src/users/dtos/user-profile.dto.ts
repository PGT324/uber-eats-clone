import { ArgsType, Field, ObjectType } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Users } from '../entities/user.entity';

@ArgsType()
export class UserProfileInput {
  @Field(() => Number)
  userId: number;
}

@ObjectType()
export class UserProfileOutput extends MutationOutput {
  @Field(() => Users, { nullable: true })
  user?: Users;
}
