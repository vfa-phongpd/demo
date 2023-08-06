import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoListService } from './todo-list.service';
import { TodoList } from './entities/todo-list.entity';
import { CreateTodoListInput } from './dto/create-todo-list.input';
import { UpdateTodoListInput } from './dto/update-todo-list.input';
import { JwtAuthGuard } from 'src/users/user.guard';
import { UseGuards } from '@nestjs/common';
import { GqlUser } from 'src/users/user.decorator';
import { log } from 'console';

@Resolver(() => TodoList)
export class TodoListResolver {
  constructor(private readonly todoListService: TodoListService) { }



  @UseGuards(JwtAuthGuard)
  @Mutation((returns) => TodoList)
  async createList(@GqlUser() user: any, @Args('DtoCreate') DtoCreate: CreateTodoListInput) {

    return this.todoListService.create(DtoCreate, user.id);
  }



  @Query(() => TodoList)
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.todoListService.findById(id);
  }

  @Query(() => TodoList)
  findByIdUser(@Args('id', { type: () => Int }) id: number) {
    return this.todoListService.findByIdUser(id);
  }


  @Mutation(() => TodoList)
  updateTodoList(@Args('updateTodoListInput') updateTodoListInput: UpdateTodoListInput) {
    return this.todoListService.update(updateTodoListInput.id, updateTodoListInput);
  }

  @Mutation(() => Number)
  removeTodoList(@Args('id', { type: () => Int }) id: number) {
    return this.todoListService.remove(id);
  }
}
