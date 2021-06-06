import controller from '$/api/meijin/controller'
import fastify from 'fastify'

test('get meijin', async () => {
  const injectedController = controller.inject(() => ({
    getMeijin: () => 'meijin'
  }))(fastify())

  const res = await injectedController.get({})

  expect(res.status).toBe(200)

  // 型を通すためにif文を挟まないといけないのは辛い・・・？
  if (res.status === 200) expect(res.body.name).toBe('meijin')

  // こちらでもいいかな・・・
  expect(res.body!.name).toBe('meijin')
})
