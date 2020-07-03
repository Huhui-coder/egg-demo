const Controller = require('egg').Controller;
class UserController extends Controller {
  async getUserList() {
    const { ctx, service } = this // 从this获取service
    const users = await service.user.find()

    ctx.body = {
      code: 0,
      message: 'success',
      data: users
    }
  }
  async login() {
    const { ctx, service } = this
    const loginUser = await service.user.login()
    ctx.body = {
      code: 0,
      message: 'success',
      data: loginUser
    }
  }

  async register() {
    const { ctx, service } = this
    const registerUser = await service.user.register()
    ctx.body = {
      code: 0,
      message: 'success',
      data: registerUser
    }
  }
}
module.exports = UserController;