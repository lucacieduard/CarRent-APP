import styles from "./Input.module.scss";

type Props = {
  title: string;
  type: string;
  placeholder: string;
  bg?: boolean;
  name: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <div className={styles.field}>
      <label>{props.title}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={props.bg ? { backgroundColor: "white" } : {}}
        name={props.name}
        onChange={(e) => props.changeHandler(e)}
      />
    </div>
  );
};

export default Input;
