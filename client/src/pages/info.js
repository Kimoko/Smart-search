import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from './Rt.png'

const info = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="200px" />
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            +7 (495) 161-76-66 <br></br>
            support@isource.ru
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Закупки
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Processor</CDBFooterLink>
              <CDBFooterLink href="/">Insprctor</CDBFooterLink>
              <CDBFooterLink href="/">Reserve</CDBFooterLink>
              <CDBFooterLink href="/">Element</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Логика
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Radar</CDBFooterLink>
              <CDBFooterLink href="/">Express</CDBFooterLink>
              <CDBFooterLink href="/">Engine</CDBFooterLink>
              <CDBFooterLink href="/">Terminal</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Центр знаний
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Новости</CDBFooterLink>
              <CDBFooterLink href="/">Academy</CDBFooterLink>
              <CDBFooterLink href="/">О нас</CDBFooterLink>
              <CDBFooterLink href="/">Контакты</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; isource, 2022</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default info;