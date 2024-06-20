import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  image?: InputJsonValue;
  numberField?: number | null;
  profileId?: string | null;
  profileImage?: InputJsonValue;
  profileNumber?: number | null;
};
