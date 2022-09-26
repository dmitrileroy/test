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

import { Avatar, Tooltip, Badge, Popover } from '@mui/material';
import Avatar1Image from '../../utils/assets/images/Avatar_10.png';
import Avatar2Image from '../../utils/assets/images/Avatar_9.png';
import Avatar3Image from '../../utils/assets/images/Avatar_8.png';
import Frame3Image from '../../utils/assets/images/Frame_3.jpg';
import { styled } from '@mui/material/styles';
import { Frame2Props } from '../../types';

 
const Frame21: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `254px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Avatar1: any = styled(Avatar)({  
  position: `absolute`,  
  left: `109px`,  
  top: `70px`,  
  width: `24px`,  
  height: `24px`,  
});
  
const Avatar2: any = styled(Avatar)({  
  width: `40px`,  
  height: `40px`,  
  position: `absolute`,  
  left: `156px`,  
  top: `62px`,  
});
  
const Avatar3: any = styled(Avatar)({  
  position: `absolute`,  
  left: `8px`,  
  top: `50px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar4: any = styled(Avatar)({  
  position: `absolute`,  
  left: `72px`,  
  top: `114px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Avatar5: any = styled(Avatar)({  
  position: `absolute`,  
  left: `256px`,  
  top: `106px`,  
  width: `32px`,  
  height: `32px`,  
});
  
const Avatar6: any = styled(Avatar)({  
  position: `absolute`,  
  left: `136px`,  
  top: `114px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Frame3: any = styled("img")({  
  height: `74px`,  
  width: `145px`,  
  objectFit: `cover`,  
});
  
const Frame3Wrapper: any = styled("div")({  
  position: `absolute`,  
  top: `165px`,  
  left: `18px`,  
});
  
const Hello: any = styled("div")(({ theme }: any) =>({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: theme.typography["Components"]["Avatar Initials"].fontStyle,  
  fontFamily: theme.typography["Components"]["Avatar Initials"].fontFamily,  
  fontWeight: theme.typography["Components"]["Avatar Initials"].fontWeight,  
  fontSize: theme.typography["Components"]["Avatar Initials"].fontSize,  
  letterSpacing: theme.typography["Components"]["Avatar Initials"].letterSpacing,  
  textDecoration: theme.typography["Components"]["Avatar Initials"].textDecoration,  
  lineHeight: theme.typography["Components"]["Avatar Initials"].lineHeight,  
  textTransform: theme.typography["Components"]["Avatar Initials"].textTransform,  
  position: `absolute`,  
  left: `166px`,  
  top: `187px`,  
}));
 
function Frame2(props: Frame2Props): JSX.Element {
  return (
    <Frame21 className={props.className} >
      <Avatar1 variant="square" src={Avatar1Image} alt={"Avatar"}   />
      <Avatar2 variant="rounded" src={Avatar2Image} alt={"Avatar"}   />
      <Avatar3 variant="circular" src={Avatar3Image} alt={"Avatar"}   />
      <Avatar4 variant="square"  >OP</Avatar4>
      <Avatar5 variant="square"   inputProps={{ "aria-label":"'hello'" }}>OP</Avatar5>
      <Tooltip id={33} arrow={true} placement={"top"}  title={'hello'}>
        <Avatar6 variant="rounded"  >OP</Avatar6>
      </Tooltip>
        <Frame3Wrapper id={22}>
        <Badge  anchorOrigin={{vertical: 'top', horizontal: 'right'}} color={"primary"}>
        <Frame3  src={Frame3Image} alt={"Frame 3"}/>
      </Badge>
      </Frame3Wrapper>
      <Popover  
        marginThreshold={0}
        anchorEl={undefined}
        anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        transformOrigin={{vertical: 'top', horizontal: 'left'}}
        keepMounted
        transitionDuration={0}
        open={undefined}
        onClose={undefined}
      >
        <Hello >
          {`hello`}
            </Hello>
      </Popover>
    </Frame21>
  );
}

export default Frame2;
