import { cars } from './cars';

class CLI {
  public run(): Promise<void> {
    return cars();
  }
}

export { CLI };
