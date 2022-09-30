/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { Helmet } from 'react-helmet';
import Frame6Image from 'src/assets/food/images/Frame11_Frame_6.jpg';
import { styled } from '@mui/material/styles';

 
const Frame111 = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `144px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Frame6 = styled("img")({  
  height: `101px`,  
  width: "100%",  
  objectFit: `cover`,  
  position: `absolute`,  
  left: `23px`,  
  top: `19px`,  
});
 
function Frame11(props) {
  return (
    <Frame111 className={props.className}  aria-label={"hello"} >
      <Helmet>
        <title>Frame 11</title>
        <meta name='description' content='ggg' />
      </Helmet>
      <Frame6  src={Frame6Image} alt={"Frame 6"}/>
    </Frame111>
  );
}

export default Frame11;
