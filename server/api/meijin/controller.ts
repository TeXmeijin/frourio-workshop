import { defineController } from './$relay'
import { depend } from 'velona'

export default defineController(
  { getMeijin: () => 'meijin' as const },
  ({ getMeijin }) => ({
    get: () => ({ status: 200, body: { name: getMeijin() } })
  })
)
