import { lessonsLinks } from "../../hooks/useLinks";
import { IoIosDocument, HiVideoCamera } from "../../assets";
export const LessonsSwiperContainer = () => {
  return (
    <div className="content-lessons-swiper">
      {lessonsLinks.map((item, idx) => (
        <div key={idx} className="lesson-container">
          <div style={{ border: `1px solid ${item.bgColor}` }} className="logo">
            {item.img}
          </div>
          <p style={{ background: item.bgColor }}>{item.title}</p>
          <div className="stats">
            <div>
              <IoIosDocument color="#23266b" size={20} />
              <span>belirsiz</span>
            </div>
            <div>
              <HiVideoCamera color="#23266b" size={20} />
              <span>belirsiz</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
