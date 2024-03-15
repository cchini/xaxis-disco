import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import cx from 'classnames';
import { Select, Input, Button, Modal } from '@components/index';
import Layout from '../common/Layout/Layout';
import { iconByPlatform } from '@utilities/common.utility';
import { sendApproval } from '@services/account-setup.service';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import './accountSetUp.scss';

const IntegratedAccount = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const store = useSelector((store: AppStore) => store.account);
  const account = store?.account?.account;
  const { loading, callEndpoint } = useFetchAndLoad();
  const sendEmail = async () => await callEndpoint(sendApproval(email));

  const iconByPlatformOwner = platform => {
    const baseClass = 'headerCardPlatform_icon';
    switch (platform) {
      case 'META':
        const fb = `${baseClass} ${iconByPlatform('FACEBOOK')}`;
        const ig = `${baseClass} ${iconByPlatform('INSTAGRAM')}`;
        const msg = `${baseClass} ${iconByPlatform('MESSENGER')}`;
        return [
          <span key="fb" className={fb} />,
          <span key="ig" className={ig} />,
          <span key="msg" className={msg} />,
        ];
      case 'TIKTOK':
        const ttk = `${baseClass} ${iconByPlatform('TIKTOK')}`;
        return <span key="ttk" className={ttk} />;

      case 'SONA':
        const sona = `${baseClass} ${iconByPlatform('SONA')}`;
        return <span key="sn" className={sona} />;
    }
  };

  const handleSendEmail = async () => {
    try {
      const response = await sendEmail();
      if (response.status == 200) setOpen(false);
    } catch (error) {
      console.debug(error);
      setOpen(false);
    }
  };

  return (
    <Layout className="accountPage">
      {!loading && (
        <>
          <Modal
            className="modalAccounSetUp"
            active={open}
            onClose={() => setOpen(false)}
            header={
              <header className="headerModalAccounSetUp">
                <h2 className="headerModalAccounSetUp_title">Send Approval</h2>
                <Button
                  onClick={() => setOpen(false)}
                  className="headerModalAccounSetUp_btn"
                  hierarchy="secondary">
                  X
                </Button>
              </header>
            }>
            <section className="modalAccounSetUpContent">
              <Input
                value={email}
                onChange={value => setEmail(value.target.value)}
                placeholder="example@xaxis.com"
                label="Email"
                type="email"
              />
            </section>
            <footer className="footerModal">
              <Button onClick={() => setOpen(false)} hierarchy="secondary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleSendEmail();
                }}>
                Send
              </Button>
            </footer>
          </Modal>
          <h1 className="accountPage_title">Account Set Up</h1>
          {account && (
            <header className="accountPage_header">
              <Select
                className="selectAccount"
                label="Account name"
                options={store?.accounts}
                value={store?.account}
                disabled={true}
                isClearable={false}
              />
              <div className="accountRrss">
                <label className="accountRrss_label">Country</label>
                <p className="accountRrss_country">{account?.countryName}</p>
              </div>
              <div className="accountRrss">
                <label className="accountRrss_label">
                  Available plataforms
                </label>
                <ul className="listRrss">
                  {account?.ownerPlatforms?.map(plat =>
                    plat?.pages?.map(available => (
                      <li
                        key={available?.platform?.code}
                        className={`listRrss_item ${iconByPlatform(
                          available?.platform?.code,
                        )}`}></li>
                    )),
                  )}
                </ul>
              </div>
            </header>
          )}

          <section className="cntCardsAvailablePlataform">
            {account?.ownerPlatforms?.map(platform => (
              <article key={platform?.id} className="cardAvailablePlataforms">
                <header className="headerCardPlatform">
                  {iconByPlatformOwner(platform?.platformOwner?.code)}
                  <p className="headerCardPlatform_status">
                    <span
                      className={cx(
                        'iconStatus',
                        platform?.status
                          ? 'iconStatus__active'
                          : 'iconStatus__desactive',
                      )}
                    />
                    {platform?.status ? 'Active' : 'Pendend'}
                  </p>
                </header>
                <section className="contentCardPlataform">
                  <Input
                    label={`${platform?.platformOwner?.name} Business Manager ID`}
                    value={platform?.businessManagerId}
                    className="contentCardPlataform_input"
                    disabled={true}
                  />
                  <Input
                    label={`${platform?.platformOwner?.name} Business Manager Name`}
                    value={platform?.businessManagerName}
                    className="contentCardPlataform_input"
                    disabled={true}
                  />
                  {platform?.pages?.map(page => (
                    <Fragment key={`${page?.platform?.name}`}>
                      <Input
                        label={`${page?.platform?.name} ID`}
                        value={page?.pageId}
                        className="contentCardPlataform_input"
                        disabled={true}
                      />
                      <Input
                        label={`${page?.platform?.name} Name`}
                        value={page?.pageName}
                        className="contentCardPlataform_input"
                        disabled={true}
                      />
                    </Fragment>
                  ))}
                </section>
                <footer className="footerCardPlatform">
                  {/*  <Button hierarchy="secondary">Edit</Button> */}
                </footer>
              </article>
            ))}

            {/* SONA */}
            <article className="cardAvailablePlataforms">
              <header className="headerCardPlatform">
                <span className="headerCardPlatform_icon headerCardPlatform_icon__sona">
                  S
                </span>
                <p className="headerCardPlatform_status">
                  <span className={cx('iconStatus', 'iconStatus__desactive')} />
                  Pendend
                </p>
              </header>
              <section className="contentCardPlataform">
                <label className="contentCardPlataform_label">
                  No linked accounts
                </label>
                {/* <Input
                  label={`Campaign Manager Account ID`}
                  placeholder="SONA ID"
                  className="contentCardPlataform_input"
                />
                <Input
                  label={`Campaign Manager Account Name`}
                  placeholder="SONA Name"
                  className="contentCardPlataform_input"
                />
                <Input
                  label={'DV360 Account ID'}
                  placeholder="DV360 ID"
                  className="contentCardPlataform_input"
                />
                <Input
                  label={'DV360 Account Name'}
                  placeholder="DV360 Name"
                  className="contentCardPlataform_input"
                />
                <Input
                  label={'Sizmek Account Name'}
                  placeholder="Sizmek Name"
                  className="contentCardPlataform_input"
                />
                <Input
                  label={'Sizmek Account ID'}
                  placeholder="Sizmek ID"
                  className="contentCardPlataform_input"
                /> */}
                <Button
                  className="contentCardPlataform_btn"
                  onClick={() => setOpen(true)}>
                  <span className="iconXaxis iconXaxis-paper-plane"></span>
                  Send approval
                </Button>
              </section>
              {/*  <footer className="footerCardPlatform">
            <Button hierarchy="secondary">Edit</Button>
          </footer> */}
            </article>
          </section>
        </>
      )}
    </Layout>
  );
};

export default IntegratedAccount;
