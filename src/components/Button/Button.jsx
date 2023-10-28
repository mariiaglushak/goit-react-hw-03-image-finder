import { LoadMore } from './ButtonStyle';

const Button = ({ text, onClick }) => {
  return (
    <LoadMore onClick={onClick} type="button">
      {text}
    </LoadMore>
  );
};
export default Button;
