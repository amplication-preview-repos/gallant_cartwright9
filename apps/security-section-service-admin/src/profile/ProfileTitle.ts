import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "profileId";

export const ProfileTitle = (record: TProfile): string => {
  return record.profileId?.toString() || String(record.id);
};
