import { dbConnect } from "@/config/db";

export default (handler) => {
  return async (req, res) => {
    try {
      await dbConnect();
      const response = await handler(req, res);
      const statusCode = res.statusCode || 200;

      res.status(statusCode).send({
        type: "RESULT",
        message: res.message || "OK",
        result: response,
        error: null,
      });
    } catch (error) {

        const statusCode = error.statusCode||500;
        console.log(res.message,res.statusCode);
      res.status(statusCode).send({
        type: "ERROR",
        message: error.message || "Internal Server Error",
        result: null,
        error: error.stack
      });
    }
  };
};
