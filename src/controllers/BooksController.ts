import { Authorized, Body, ContentType, Controller, Delete, Get, JsonController, Param, Post, Put, UseBefore } from 'routing-controllers';
import { json } from 'body-parser';
import { BaseController } from '../core/base.controller';
import { BooksInterface } from '../types/interfaces/books.interface';
import { Service } from 'typedi';

@JsonController()
export class BooksController extends BaseController {
  constructor(){
    super('Books');
  }

  @Get('/books')
  @UseBefore(json())
  get() {
    return this.model?.findAll();
  }

  @Authorized('AddBook')
  @Post('/books')
  @UseBefore(json())
  create(@Body() request: BooksInterface) {
    const book = this.model?.build(request);
    book.save();
  }
}