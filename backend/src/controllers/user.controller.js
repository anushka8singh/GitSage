import { createUser } from "../services/user.service.js";

export const createUserController = async (req, res) => {
  try {
    const user = await createUser(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "User endpoint working",
  });
};