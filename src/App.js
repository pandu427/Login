import './App.css';
// import { Header } from './App.styles';
import * as s from './App.styles';
import Sidebar from './components/sidebar/Sidebar';
import MainView from './MainView';
function App() {
  const MainImage = 'images/index.jpg';
  const SidebarHeader = 'PANDU LAXMAN MANGALAWADKAR';
  const mainItem = [
    { name: 'Home', to: '/', icon: '', subMenu: [] },
    { name: 'About Us', to: '/', icon: '', subMenu: [] },
    { name: 'Projects', to: '/', icon: '', subMenu: [] },
    { name: 'Eductions', to: '/', icon: '', subMenu: [] },
  ];
  return (
    <s.App>
      <Sidebar
        MainImage={MainImage}
        SidebarHeader={SidebarHeader}
        mainItem={mainItem}
      />

      <MainView />
    </s.App>
  );
}

export default App;
