export default {
  Query: {
    serverTime: (parent: any, args: any, context: any, info: any) => {
      return new Date();
    }
  }
};