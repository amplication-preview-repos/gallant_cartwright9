import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  image?: InputJsonValue;
  numberField?: number | null;
  profileId?: string | null;
  profileImage?: InputJsonValue;
  profileNumber?: number | null;
};
