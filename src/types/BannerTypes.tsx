import { BsInstagram, BsTwitter, BsTelegram } from "../assets";

export type bannerName = "twitter" | "instagram" | "telegram";

interface ILogo {
  twitter: JSX.Element;
  instagram: JSX.Element;
  telegram: JSX.Element;
}

export interface IBannerProps {
  name: bannerName;
  title: bannerName;
  content: bannerName;
  url: bannerName;
  styles: bannerName;
}

export const logoName: ILogo = {
  twitter: <BsTwitter color="white" size={45} />,
  instagram: <BsInstagram color="white" size={45} />,
  telegram: <BsTelegram color="white" size={45} />,
};

export const bannerLinks: ILogo = {
  twitter: <a href="https://twitter.com/prototurkcom">Takip et</a>,
  instagram: <a href="https://instagram.com/prototurk.official">Takip et</a>,
  telegram: <a href="https://t.me/prototurk">Gruba katıl</a>,
};

export const bannerClasses = {
  twitter: "twitter-banner-container",
  instagram: "instagram-banner-container divider",
  telegram: "telegram-banner-container divider",
};

export const bannerTitles: ILogo = {
  twitter: (
    <h3>
      Twitter'da <b>@prototurkcom</b> hesabını takip etmeyi unutma!
    </h3>
  ),
  instagram: (
    <h3>
      Instagram'da <b>@prototurk.official</b> hesabını takip etmeyi unutma!
    </h3>
  ),
  telegram: <h3>Telegram grubumuza katıl!</h3>,
};

interface IColor {
  twitter: string;
  instagram: string;
  telegram: string;
}

export const bannerBackgroundColor: IColor = {
  twitter: "aqwe",
  instagram: "qwe",
  telegram: "ased",
};

export const bannerContents: ILogo = {
  twitter: (
    <p>
      Hazırladığımız son videolardan anında haberdar olmak için twitter
      hesabımızı takip etmeyi unutma!
    </p>
  ),
  instagram: (
    <p>
      Kodlamayla ilgili ipucu ve kolay kullanımları paylaştığımız instagram
      hesabını takip etmeyi unutmayın.
    </p>
  ),
  telegram: (
    <p>
      Yüzlerce kişiyle anında konuşabileceğin telegram grubumuza katılmayı
      unutma.
    </p>
  ),
};
