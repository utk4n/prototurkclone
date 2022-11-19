import {
  IBannerProps,
  logoName,
  bannerContents,
  bannerTitles,
  bannerLinks,
  bannerClasses
} from "../../types/BannerTypes";

export const Banner: React.FC<IBannerProps> = ({
  name,
  content,
  title,
  url,
  styles
}) => {
  return (
    <div className={`${bannerClasses[styles]}`}>
      {logoName[name]}
      <div className="banner_content">
        {bannerTitles[title]}
        {bannerContents[content]}
        {bannerLinks[url]}
      </div>
    </div>
  );
};
