import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: ItemsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [AppService],
    }).compile();

    appController = app.get<ItemsController>(ItemsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
