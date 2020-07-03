const Service = require('egg').Service;
class UserService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }
  async find() {
    // 从数据库里查询
    const users = await this.ctx.model.User.find({})

    return Object.assign({}, {
      pageNum: 1,
      pageSize: 10,
      list: users
    })
  }
  async register() {
    // 获取请求中的userName 和 passWord 
    const { userName, passWord } = await this.ctx.query
    const isExitUser = await this.ctx.model.User.find({ userName })
    let result = null
    isExitUser && (result = '该用户名已注册')
    if (!isExitUser) {
      let newUers = new this.ctx.model.User(
        {
          userName,
          passWord
        }
      )
      await newUers.save()
      result = '注册成功'
    }
    return result
  }

  async login() {
    // 获取请求中的userName 和 passWord 
    const { userName } = await this.ctx.query
    const isExitUser = await this.ctx.model.User.find({ userName })
    let result = null
    isExitUser ? (result = isExitUser) : (result = '该账号未注册')
    return result
  }
}
module.exports = UserService;