import {
  Header,
  LatestNews,
  LatestQuestions,
  LatestUsers,
  LessonsSwiperContainer,
  Banner,
} from "../components/Content";
import { Footer } from "../components/Footer/Footer";

const Content = () => {
  return (
    <main>
      <Header
        title={"Kendine değer kat!"}
        content={`İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya hazırsın!`}
      />
      <LessonsSwiperContainer />
      <Banner
        name="twitter"
        content="twitter"
        title="twitter"
        url="twitter"
        styles="twitter"
      />

      <Header
        className="middle-header divider"
        title={"Birlikte daha güçlüyüz!"}
        content={`Kodlama yaparken takıldığında ya da bazen kafanı dağıtmaya ihtiyacın olduğunda soru & cevap bölümü seni bekliyor. Merak ettiklerini sor, bildiklerini cevapla!`}
      />
      <LatestQuestions />
      <Header
        className="divider"
        title={"Yenilikleri birlikte takip edelim!"}
        content={`Her gün yeni bir şeyler çıkıyor ve gelişim durmadan devam ediyor. Kalemine değil koduna güveniyorsan gel birlikte anlatalım tüm bu yenilikleri.`}
      />
      <LatestNews />
      <Banner
        name="instagram"
        content="instagram"
        title="instagram"
        url="instagram"
        styles="instagram"
      />
      <Header
        className="divider"
        title={"Kimleri görüyoruz!"}
        content={`Hoşgeldin, evet sen de aramıza hoşgeldin. Bu ailenin bir parçası olmak istediğin için teşekkürler. Şimdi hemen birilerini takip etmeye başla ki akışın biraz canlansın!`}
      />
      <LatestUsers />
      <Banner
        name="telegram"
        content="telegram"
        title="telegram"
        url="telegram"
        styles="telegram"
      />
      <Footer />
    </main>
  );
};

export default Content;
