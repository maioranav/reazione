import "./NoClick.scss";
import { ReactTyped } from "react-typed";

interface INoClick {
  content: string;
  color: string;
  main?: boolean;
  onClick?: () => void;
}

export const NoClick = ({ content, color, main, onClick }: INoClick) => {
  return (
    <>
      {main ? (
        <ReactTyped strings={[content]} typeSpeed={50} className="noclick main" style={{ background: color }} showCursor={false} />
      ) : (
        <div style={{ backgroundColor: color }} onClick={onClick} className={"noclick"}>
          {content?.toUpperCase()}
        </div>
      )}
    </>
  );
};
