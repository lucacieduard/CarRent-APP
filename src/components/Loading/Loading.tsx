import "./Loading.scss";

type Props = {
  styles?: React.CSSProperties;
};

const Loading = (props: Props) => {
  return <span className="loader" style={props.styles}></span>;
};

export default Loading;
