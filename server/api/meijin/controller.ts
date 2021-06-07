import { defineController } from './$relay'

export default defineController(
  { getMeijin: () => 'meijin' as const },
  ({ getMeijin }) => ({
    get: () => ({ status: 200, body: { name: getMeijin() } })
  })
)
