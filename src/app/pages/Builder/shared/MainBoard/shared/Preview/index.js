import Iframe from './Iframe';
import { useSelector } from 'react-redux';

const Example = () => {
  const showSidebar = useSelector((state) => state.app.showSidebar);
  return(
    <Iframe>
      <h1>Hello I am from iFrame</h1>
      { showSidebar && (<p>Sidebar Active</p>)}
    </Iframe>
  );
}

export default Example;