import { default as Btn } from '@material-ui/core/Button';

function Button(props) {
  const onClick = () => {
    props.handleClick();
  };
  const { color } = props;
  return (
    <Btn onClick={onClick} color={color ? color : 'primary'} size="small">
      {props.children}
    </Btn>
  );
}

export default Button;
