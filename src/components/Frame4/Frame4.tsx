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

import { Avatar, Alert, Radio, FormControlLabel, Checkbox } from '@mui/material';
import Avatar1Image from 'src/hello/world/Frame4_Avatar_1.png';
import { styled } from '@mui/material/styles';
import Frame11 from 'src/components/Frame11/Frame11';
import { Frame4Props } from 'src/types';
import useFrame4 from 'src/components/Frame4/useFrame4';
 
const Frame41: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "20px",  
  height: "10px",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Frame5: any = styled("img")({  
  height: `101px`,  
  width: `119px`,  
  objectFit: `cover`,  
  position: `absolute`,  
  left: `40px`,  
  top: `16px`,  
});
  
const Frame111: any = styled(Frame11)(({ theme }: any) =>({  
  width: `169px`,  
  height: `141px`,  
  position: `absolute`,  
  left: `16px`,  
  top: `196px`,  
}));
  
const Frame13: any = styled("div")({  
  backgroundColor: `rgba(0, 0, 0, 1)`,  
  display: `flex`,  
  position: `absolute`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `190px`,  
  height: `104px`,  
  left: `185px`,  
  top: `13px`,  
  overflow: `hidden`,  
});
  
const Text: any = styled("div", {
    shouldForwardProp: prop => !["fns"].includes(prop.toString())
  })(({ fns }: any) =>({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(211, 126, 126, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Advent Pro`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0.14000000059604645px`,  
  textDecoration: `none`,  
  lineHeight: `20px`,  
  textTransform: `none`,  
  position: `absolute`,  
  left: `65px`,  
  top: `46px`,  
  width: fns.bye,  
}));
  
const Avatar1: any = styled(Avatar)({  
  position: `absolute`,  
  left: `185px`,  
  top: `139px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const AlertFilled: any = styled(Alert)({  
  width: `320px`,  
  position: `absolute`,  
  left: `250px`,  
  top: `139px`,  
});
  
const FormControlLabel1: any = styled(FormControlLabel)({  
  position: `absolute`,  
  left: `168px`,  
  top: `233px`,  
  margin: `0px`,  
});
  
const FormControlLabel2: any = styled(FormControlLabel)({  
  position: `absolute`,  
  left: `25px`,  
  top: `145px`,  
  margin: `0px`,  
});
 
function Frame4(props: Frame4Props): JSX.Element {
  const {data, fns} = useFrame4();
  return (
    <Frame41 className={props.className} >
      <Frame5  src={data.meta.src} alt={"meow"}/>
      <Frame111   />
      <Frame13 >
        <Text fns={fns} >
          {`Text`}
            </Text>
      </Frame13>
      <Avatar1 variant="rounded" src={Avatar1Image} alt={"Avatar"}   />
      <AlertFilled variant="filled" severity={"info"}   > Alert content </AlertFilled>
      <FormControlLabel1 control={<Radio color="primary" size="medium" />} label={"Label"} />
      <FormControlLabel2 control={<Checkbox defaultChecked={true} size="medium" color="primary" />} label={`Label`} />
    </Frame41>
  );
}

export default Frame4;
