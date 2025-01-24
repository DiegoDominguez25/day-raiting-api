export const handleInvalidJson = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("Invalid JSON received:", err.message);
    return res.status(400).json({
      error: "Invalid JSON format",
    });
  }
  next();
};
