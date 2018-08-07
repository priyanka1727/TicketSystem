import { BaseHomeModule } from './base-home.module';

describe('BaseHomeModule', () => {
  let baseHomeModule: BaseHomeModule;

  beforeEach(() => {
    baseHomeModule = new BaseHomeModule();
  });

  it('should create an instance', () => {
    expect(baseHomeModule).toBeTruthy();
  });
});
