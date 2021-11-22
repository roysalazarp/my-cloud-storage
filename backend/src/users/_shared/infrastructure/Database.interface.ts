export default interface IDatabase<X, T> {
  execute: (input: X) => Promise<T>;
}