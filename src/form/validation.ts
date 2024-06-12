import { InferType, ValidationError } from "yup";

export const validateForm = (values: any, schema: any): any => {
  type FormValues = InferType<typeof schema>;
  try {
      schema.validateSync(values, { abortEarly: false });
  } catch (error: unknown) {
      const errors: Partial<Record<keyof FormValues, string>> = {};
      if (error instanceof ValidationError) {
          error.inner.forEach((err: ValidationError) => {
              if (err.path) {
                  errors[err.path as keyof FormValues] = err.message;
              }
          });
      }
      return errors;
  }
  return {};
};