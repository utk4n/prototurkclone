import { useParams } from "react-router-dom";
const Categories = () => {
  const { id } = useParams();
  return (
    <div className="dynamic-lessons-container">
      <div className="dynamic-lessons-header">
        <h3>{id?.toUpperCase()} Dersleri</h3>
        <p>
          Hiper Metin İşaretleme Dili yani HTML, web sayfasındaki yazıları belli
          başlı HTML etiketleri ile işaretleyerek tarayıcıların bu metinleri
          anlamlandırmasına yardımcı olur. Ayrıca bu sayede CSS ve Javascript
          ile sayfanın görseli ve dinamikliği oluşturulur.
        </p>
      </div>

      <div className="category-content-title">
        <h5>{id?.toUpperCase()} Dersleri</h5>
        <ul></ul>
      </div>
    </div>
  );
};

export default Categories;
