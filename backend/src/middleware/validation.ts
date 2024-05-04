import { NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { Request, Response } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),

  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address must be a string"),

  body("city").isString().notEmpty().withMessage("City must be a string"),

  body("phoneNo")
    .isString()
    .notEmpty()
    .withMessage("Phone number must be a string"),
    handleValidationErrors,
];
