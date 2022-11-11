import { ProfileDropDown } from "../../assets/ProfileDropDown";

export const Account = () => {
  return (
    <div className="account_menu">
      <img
        src="https://www.gravatar.com/avatar/9ec4fcce1c0c1d7412edf7aede38a8a9?s=80&d=mp&r=g"
        alt="profile_photo"
      />
      <p>@utkkan</p>
      <ProfileDropDown />
    </div>
  );
};
