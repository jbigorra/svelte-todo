import { Controller, Get } from '@nestjs/common';

interface IItem {
  id: number,
  text: string,
  done: boolean
}

@Controller('items')
export class ItemsController {
  constructor() {}

  @Get('/')
  getItems(): IItem[] {
    return [
      { id: new Date().getTime(), text: "First item", done: true },
      { id: new Date().getTime(), text: "Second item", done: false },
      { id: new Date().getTime(), text: "Three item", done: false },
    ];
  }
}

// localhost:3000/items
// browser >-- request to server (/items) --> ItemsController
