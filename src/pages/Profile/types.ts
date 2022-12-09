export interface IProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
export interface ProfileState {
  isLoading: boolean;
  error: string | null;
  profile: IProfile | null;
}
export interface ProfileResponse {
  profile: IProfile;
}
