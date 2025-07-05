import vine from '@vinejs/vine'

export const calculAgeValidator = vine.compile(
  vine.object({
    date_of_birth: vine.date(),
    date_of_death: vine.date().optional(),
  })
)