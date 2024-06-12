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


// export email and required functions
export const email = (value: string): string | undefined => {
  if (!value) {
    return "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Invalid email address";
  }
};

export const required = (fields: string[], values: { [index: string]: string }): { [index: string]: string } => {
    const errors: { [index: string]: string } = {};
    fields.forEach((field) => {
        if (!values[field]) {
        errors[field] = "Required";
        }
    });
    return errors;
    };
    
