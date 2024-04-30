import { ResourceType } from "../types";

const ContentSection = ({
  title,
  resources,
  type,
}: {
  title: string;
  resources: ResourceType;
  type: "image" | "video";
}) => {
  return (
    <div className="p-4 my-[60px] max-w-[1000px] mx-auto">
      <h1 className="font-BlackHanSans font-bold text-gradient-1 text-[50px] mb-[60px] lg:text-[77px]">
        {title}
      </h1>
      <div className="gap-y-10 flex flex-col justify-center lg:flex-row flex-wrap lg:gap-x-10">
        {resources.map(({ comment, info, resource }, i) => (
          <div
            key={`resource-${info}-${i}`}
            className="flex flex-col justify-center border-2 rounded-2xl bg-black"
          >
            {type === "image" ? (
              <img
                src={resource}
                alt="photo"
                className="rounded-t-2xl w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] object-contain"
                width="320px"
                height="320px"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${resource}`}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="rounded-t-2xl w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
              />
            )}
            <div className="flex flex-col p-4 font-BlackHanSans">
              <p className="text-orange-500 text-[12px]">{info}</p>
              <p className="text-orange-300 text-[20px] text-sd-orange">{comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b-[2px] border-white mt-[30px] lg:mt-[50px]" />
    </div>
  );
};

export default ContentSection;
