/*
* @Author: liujjxi
* @Date:   2017-09-05 21:42:07
* @Last Modified by:   liujjxi
* @Last Modified time: 2017-09-05 22:51:24
*/
/*const faker = require('faker')

module.exports = {
  api: '/mock/ui/v1/chart/:id',
  response: function (req, res) {
    res.json({
      rlt: 'true',
      msg: 'ok',
      data: faker.random.uuid()
    })
  }
}*/
const Mock = require('mockjs')
module.exports = {
  api: '/mock/ui/v1/chart/:id',
  response: function(req, res) {
    res.json({
      rlt: 'true',
      list: Mock.mock({
        'data|7': ['@integer(1,100000)']
      })
    })
  }
}