import "./RocketParams.scss";
import { TechParam } from "../../types/types";

type Props = {
  techParams: TechParam[];
};

export const RocketParams: React.FC<Props> = ({ techParams }) => {
  return (
    <div className="params">
      {techParams.map((param) => (
        <div className="params__pair" key={param.title}>
          <p className="rocketCard__param">{param.title}</p>
          <p className="rocketCard__value">{`${param.value1} / ${param.value2}`}</p>
        </div>
      ))}
    </div>
  );
};
