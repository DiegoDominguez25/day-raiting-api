export const validateSchema = (schema) => {
  return (req, res, next) => {
    console.log(req.body);
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.error(result.error.issues);

      return res.status(400).json({
        error: "Invalid data",
      });
    }

    req.validateData = result.data;
    next();
  };
};
