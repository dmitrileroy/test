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

import { TextField, Button } from '@mui/material';
import Avatar1Image from '../../utils/assets/images/Avatar_8.png';
import CheckImage from '../../utils/assets/images/check_1.png';
import { styled } from '@mui/material/styles';
import SidebarRow1 from '../SidebarRow1/SidebarRow1';
import { Account1Props } from '../../types';

 
const TypeQuest: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: theme.customShadows["Elevation"]["6"].boxShadow,  
  borderRadius: `10px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `574px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `40px 40px 40px 0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
}));
  
const Pp: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  width: `213px`,  
  margin: `0px`,  
});
  
const Avatar1: any = styled("img")({  
  height: `120px`,  
  width: `120px`,  
  margin: `0px`,  
});
  
const List: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `40px 0px 0px 0px`,  
});
  
const SidebarRow11: any = styled(SidebarRow1)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  margin: `0px`,  
}));
  
const SidebarRow12: any = styled(SidebarRow1)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `40px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow13: any = styled(SidebarRow1)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow14: any = styled(SidebarRow1)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `40px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow15: any = styled(SidebarRow1)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `40px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Form: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 40px`,  
});
  
const Text: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const AccountSettings: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: theme.typography["Typography"]["H5"].fontStyle,  
  fontFamily: theme.typography["Typography"]["H5"].fontFamily,  
  fontWeight: theme.typography["Typography"]["H5"].fontWeight,  
  fontSize: theme.typography["Typography"]["H5"].fontSize,  
  letterSpacing: theme.typography["Typography"]["H5"].letterSpacing,  
  textDecoration: theme.typography["Typography"]["H5"].textDecoration,  
  lineHeight: theme.typography["Typography"]["H5"].lineHeight,  
  textTransform: theme.typography["Typography"]["H5"].textTransform,  
  margin: `0px`,  
}));
  
const Frame3: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `80px 0px 0px 0px`,  
});
  
const Row1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
});
  
const TextFieldStandard: any = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const TextFieldStandard1: any = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `40px 0px 0px 0px`,  
});
  
const Row2: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 40px`,  
});
  
const TextFieldStandard2: any = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const TextFieldStandard3: any = styled(TextField)({  
  alignSelf: `stretch`,  
  margin: `40px 0px 0px 0px`,  
});
  
const Q123: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-end`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `80px 0px 0px 0px`,  
});
  
const ButtonContained: any = styled(Button)({  
  margin: `0px`,  
});
  
const Success: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 40px`,  
});
  
const Text1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Frame2: any = styled("div")({  
  border: `3px solid rgba(100, 207, 111, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `40px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  height: `52px`,  
  width: `52px`,  
  margin: `0px`,  
  overflow: `hidden`,  
});
  
const Icon1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Icons: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `9px 7px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Check: any = styled("img")({  
  height: `17.03px`,  
  width: `21.92px`,  
  margin: `0px`,  
});
  
const PaymentConfirmed: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `24px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
}));
  
const AConfirmationEmailHa: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `500`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
}));
  
const Text2: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `60px 0px 0px 0px`,  
});
  
const OrderReference: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `24px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Q0021488192: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `500`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `4px 0px 0px 0px`,  
}));
 
function Account1(props: Account1Props): JSX.Element {
  return (
    <TypeQuest className={props.className} >
      <Pp >
        <Avatar1  src={Avatar1Image} alt={"Avatar"}/>
        <List >
          <SidebarRow11   />
          <SidebarRow12   />
          <SidebarRow13   />
          <SidebarRow14   />
          <SidebarRow15   />
        </List>
      </Pp>
      <Form >
        <Text >
          <AccountSettings >
            {`Account Settings`}
              </AccountSettings>
        </Text>
        <Frame3 >
          <Row1 >
            <TextFieldStandard variant="standard" size="small"  label={`First Name`} helperText="Helper text"    />
            <TextFieldStandard1 variant="standard" size="small"  label={`Phone`} helperText="Helper text"    />
          </Row1>
          <Row2 >
            <TextFieldStandard2 variant="standard" size="small"  label={`Last Name`} helperText="Helper text"    />
            <TextFieldStandard3 variant="standard" size="small"  label={`Email`} helperText="Helper text"    />
          </Row2>
        </Frame3>
        <Q123 >
          <ButtonContained variant="contained" size="large" color="primary"    > SAVE </ButtonContained>
        </Q123>
      </Form>
      {false &&
        <Success >
          <Text1 >
            <Frame2 >
              <Icon1 >
                <Icons >
                  <Check  src={CheckImage} alt={"check"}/>
                </Icons>
              </Icon1>
            </Frame2>
            <PaymentConfirmed >
              {`Payment Confirmed!`}
                </PaymentConfirmed>
            <AConfirmationEmailHa >
              {`A confirmation email 
has been sent.`}
                </AConfirmationEmailHa>
          </Text1>
          <Text2 >
            <OrderReference >
              {`Order Reference #`}
                </OrderReference>
            <Q0021488192 >
              {`0021488192`}
                </Q0021488192>
          </Text2>
        </Success>
      }
    </TypeQuest>
  );
}

export default Account1;
