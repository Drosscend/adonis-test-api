import type { HttpContext } from '@adonisjs/core/http'
import { calculAgeValidator } from '#validators/calcul_age'

export default class CalculAgesController {
  async index({ request, response }: HttpContext) {
    const { date_of_birth, date_of_death } = await request.validateUsing(calculAgeValidator)

    const age = calculAge(date_of_birth, date_of_death)

    return response.json({ age })
  }
}

function calculAge(date_of_birth: Date, date_of_death?: Date) {
  const age = date_of_death ? date_of_death.getFullYear() - date_of_birth.getFullYear() : new Date().getFullYear() - date_of_birth.getFullYear()
  return age
}