import { BaseHomeRoutingModule } from './base-home-routing.module';

describe('BaseHomeRoutingModule', () => {
  let baseHomeRoutingModule: BaseHomeRoutingModule;

  beforeEach(() => {
    baseHomeRoutingModule = new BaseHomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(baseHomeRoutingModule).toBeTruthy();
  });
});
