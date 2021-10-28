import React from "react";
import styled from "styled-components";
import { ChivoBoldCharade24px, ChivoNormalCharade24px, ChivoBoldKashmirBlue36px } from "../../styledMixins";
import "./DesktopLogIn.css";

function DesktopLogIn(props) {
  const { logIn, ssoSamlLoginForm, place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-log-in screen">
        <OverlapGroup4>
          <OverlapGroup3>
            <Vector1 src="/img/vector-1@1x.svg" />
            <OverlapGroup2>
              <OverlapGroup>
                <LogIn>{logIn}</LogIn>
                <OverlapGroup1>
                  <SSOSAMLLoginForm>{ssoSamlLoginForm}</SSOSAMLLoginForm>
                </OverlapGroup1>
              </OverlapGroup>
              <LogInButton src="/img/log-in-button@2x.svg" />
            </OverlapGroup2>
          </OverlapGroup3>
          <Place>{place}</Place>
        </OverlapGroup4>
      </div>
    </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 1440px;
  height: 920px;
  position: relative;
  margin-top: 50px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 1440px;
  height: 876px;
  top: 44px;
  left: 0;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 408px;
  top: 468px;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 507px;
  height: 610px;
  top: 0;
  left: 466px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 507px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 38.3px 68.2px;
  align-items: flex-start;
  min-height: 610px;
  background-color: var(--mystic);
  box-shadow: 0px 4px 4px #00000040;
`;

const LogIn = styled.div`
  ${ChivoBoldKashmirBlue36px}
  width: 313px;
  min-height: 34px;
  align-self: center;
  margin-right: 0;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 369px;
  margin-top: 44px;
  display: flex;
  padding: 121.5px 8.4px;
  align-items: flex-end;
  min-width: 370px;
  background-image: url(/img/rectangle-16-1@2x.svg);
  background-size: 100% 100%;
`;

const SSOSAMLLoginForm = styled.div`
  ${ChivoBoldCharade24px}
  width: 353px;
  min-height: 116px;
  text-align: center;
  letter-spacing: 0;
`;

const LogInButton = styled.img`
  position: absolute;
  width: 233px;
  height: 67px;
  top: 520px;
  left: 136px;
`;

const Place = styled.div`
  ${ChivoNormalCharade24px}
  position: absolute;
  width: 115px;
  top: 0;
  left: 76px;
  text-align: center;
  letter-spacing: 0;
`;

export default DesktopLogIn;
