export class ShouldNotInitializedBean {
  constructor() {
    throw new Error("ShouldNotInitializedBean should not be initialized");
  }
}