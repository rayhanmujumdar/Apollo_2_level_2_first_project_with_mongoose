const customError = function (
  status: number = 500,
  message: string = "Something was wrong",
) {
  const err: Error & { status?: number } = new Error(message);
  err.status = status;
  return err;
};
export default customError;
