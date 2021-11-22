import { UserOutputDto } from "../../users/_shared/interfaces/Output.dto";
import { sign } from "jsonwebtoken";

export const createAccessToken = (user: UserOutputDto) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m"
  });
};

export const createRefreshToken = (user: UserOutputDto) => {
  return sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d"
  });
};