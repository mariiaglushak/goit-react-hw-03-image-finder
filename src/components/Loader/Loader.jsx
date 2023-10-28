import { Blocks } from 'react-loader-spinner';
import { SpeenerBlock } from './LoaderStyle';

const Loader = () => {
  return (
    <SpeenerBlock>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </SpeenerBlock>
  );
};
export default Loader;
