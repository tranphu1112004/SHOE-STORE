import { useContext } from "react";
import { ContentCT } from "../../../context/ContentContext";
import { Link } from "react-router-dom";

const Content: React.FC = () => {
  const ContentContext = useContext(ContentCT);

  if (!ContentContext) {
    return <div>Loading...</div>;
  }

  const { contents, loading } = ContentContext;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" mt-16 lg:mt-[136px]">
      <div className="mt-3 w-full  lg:md:text-center lg:md:mx-0">
        <div>
          <img
            className="object-cover w-full lg:h-[400px]"
            src="../../../../public/a-stylish-and-modern-sneaker-banner-with-sleek-bla-ZFYQA58NTbONVXZBUixppQ-CdcaBc7_Tx6HGdM0eGe8FQ.jpeg"
            alt=""
          />
        </div>
        <div className="my-6">
          <h2 className=" mx-2  font-protest-strike relative font-normal text-4xl lg:mx-0">
            TIN TỨC XU HƯỚNG
            <span className="text-lg absolute top-2 left-[298px] lg:md:hidden">
              <i className="fa-solid fa-caret-right bottom-11"></i>
            </span>
          </h2>

          <div className="relative">
            <p className="mx-2 text-sm font-medium mt-2 lg:mx-0">
              Nắm bắt phóng cách giới trẻ cùng{" "}
              <span className="font-semibold">MONA SNE✭KER</span>
            </p>
            <Link to={""}>
              <div className=" absolute right-0 top-1 max-sm:hidden"></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-8 mx-3 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:mx-0 lg:gap-4">
        {contents.map((content) => (
          <Link to={""}>
            <div className="my-3">
              <div className="w-full h-[500px] md:h-[400px] lg:h-[400px]">
                <img
                  className="w-full h-[500px] md:h-[500px] lg:h-[400px] object-cover rounded-md shadow-lg"
                  src={content.image}
                  alt=""
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-sm">{content.type}:</p>
                  <p className="font-medium " key={content.id}>
                    {content.name}
                  </p>
                </div>
                <div className="my-auto">
                  <Link to={""}>
                    <button
                      className="px-6 py-2 text-xs bg-black text-white font-medium rounded-[50px] "
                      type="submit"
                    >
                      Xem thêm
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Content;
