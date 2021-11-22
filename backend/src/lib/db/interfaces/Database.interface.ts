export default interface IDatabase<T> {
  makeConnection: () => T;
}