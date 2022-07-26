import {styled} from '@mui/system';
import {MatxVerticalNav} from 'app/components';
import useSettings from 'app/hooks/useSettings';
import {navigations_ADMIN, navigations_AL, navigations_NP, navigations_PM, navigations_PT} from 'app/navigations';
import {Fragment} from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import useAuth from "../hooks/useAuth";

const StyledScrollBar = styled(Scrollbar)(() => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'relative',
}));

const SideNavMobile = styled('div')(({theme}) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.54)',
  zIndex: -1,
  [theme.breakpoints.up('lg')]: { display: 'none' },
}));
let navigation_array = {};
const Sidenav = ({ children }) => {
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  console.log("user");
  console.log(user.role);
  console.log("user");
  if( user.role == "ADMIN" ){
    navigation_array =  navigations_ADMIN ;
  }else if (user.role == "PM"){
    navigation_array =  navigations_PM ;
  }else if (user.role == "NP"){
    navigation_array =  navigations_NP ;
  }else if (user.role == "AL"){
    navigation_array =  navigations_AL ;
  }else if (user.role == "PT"){
    navigation_array =  navigations_PT ;
  }


  const updateSidebarMode = (sidebarSettings) => {
    let activeLayoutSettingsName = settings.activeLayout + 'Settings';
    let activeLayoutSettings = settings[activeLayoutSettingsName];

    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings,
        },
      },
    });
  };

  return (
    <Fragment>
      <StyledScrollBar options={{ suppressScrollX: true }}>
        {children}
        <MatxVerticalNav items={navigation_array} />
      </StyledScrollBar>

      <SideNavMobile onClick={() => updateSidebarMode({ mode: 'close' })} />
    </Fragment>
  );
};

export default Sidenav;
