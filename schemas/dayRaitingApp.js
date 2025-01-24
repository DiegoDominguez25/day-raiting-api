import { z } from "zod";

export const dayRatingSchema = z.object({
  date: z.coerce
    .date()
    .refine((date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date <= today;
    }, "Date must be less than or equal to today")
    .refine((date) => {
      const thisYear = new Date().getFullYear();
      return date.getFullYear() === thisYear;
    }, "Date must be in the current year"),
  rating: z
    .number({
      required_error: "La calificación es obligatoria",
      invalid_type_error: "La calificación debe ser un número",
    })
    .int()
    .min(1, "Rating must be greater than 0")
    .max(5, "Rating must be less than 6"),
  comment: z
    .string()
    .max(500, "Comment must be less than 500 characters")
    .optional()
    .default(""),
});
