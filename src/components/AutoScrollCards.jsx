import React, { useRef, useState } from "react";
import { ScrollCard } from "./ScrollCard";

export const AutoScrollCards = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    if (ref.current.scrollLeft + scrollOffset >= ref.current.scrollLeftMax)
      return setRight(false);
    if (ref.current.scrollLeft + scrollOffset < 0) return setLeft(false);
    if (left !== true) setLeft(true);
    if (right !== true) setRight(true);
  };

  return (
    <div className="px-4 relative">
      <div
        className="grid  grid-flow-col gap-[10px] py-[25px] overflow-x-scroll snap-x cards w-full scroll-smooth"
        ref={ref}
      >
        <ScrollCard
          title={"service 1"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 2"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 3"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
        <ScrollCard
          title={"service 4"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem repudiandae, dolorum placeat velit tenetur dignissimos  vitae odit quisquam quas laudantium, sequi natus eos nisi ratione ipsum"
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <button onClick={() => scroll(-300)} className="mr-8">
          left
        </button>
        <button onClick={() => scroll(300)}>right</button>
      </div>
    </div>
  );
};
