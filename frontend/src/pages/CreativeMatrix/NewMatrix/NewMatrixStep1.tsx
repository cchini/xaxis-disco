import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Input, Modal, Switch, Checkbox } from '@components/index';
import Layout from '../../common/Layout/Layout';
import './newMatrix.scss';

const NewMatrixStep2 = () => {
  const navigate = useNavigate();

  return (
    <Layout className="newCreativeMatrixPage">
      <h1 className="newCreativeMatrixPage_title">
        Create a new Creative Matrix
      </h1>

      {/* Sección de cards de redes sociales */}
      <nav className="navMatrix">
        <Input
          value="input"
          placeholder="Name"
          label="Name"
          className="navMatrix_input"
        />
        <div className="contentEnabledDisabled">
          <label className="contentEnabledDisabled_label">
            Enable/Disabled plataforms
          </label>
          <ul className="listOptions">
            <li className="listOptions_item">
              <Switch
                name="facebook"
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-facebook-f"></span>
                  </div>
                }
                className="switchAvailable"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-instagram"></span>
                  </div>
                }
                name="Instragram"
                className="switchAvailable"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
                  </div>
                }
                className="switchAvailable"
                name="Messenger"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-tiktok"></span>
                  </div>
                }
                className="switchAvailable"
                name="Tiktok"
              />
            </li>
            <li className="listOptions_item">
              <Switch
                label="S"
                name="SONA"
                className="switchAvailable switchAvailable__sona"
              />
            </li>
          </ul>
        </div>
      </nav>
      <section className="plataformsConfig">
        <h2 className="plataformsConfig_title">
          Facebook, Instagram & Facebook Messenger
        </h2>
        <section className="contentPlatformConfig">
          <h3 className="contentPlatformConfig_title">Select Placement</h3>
          <section className="configPlatforms">
            <ul className="listPlatform">
              <li className="listPlatform_item listPlatform_item__title">
                Facebook
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook feed" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook instream video" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook marketplace" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook search" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook story" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook video feed" />
              </li>
            </ul>

            <ul className="listPlatform">
              <li className="listPlatform_item listPlatform_item__title">
                Instragram
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Instragram explore" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Instragram IGTV" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Instragram story" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Instragram stream" />
              </li>
            </ul>

            <ul className="listPlatform">
              <li className="listPlatform_item listPlatform_item__title">
                Messenger
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Messenger story" />
              </li>
            </ul>
          </section>

          <h3 className="contentPlatformConfig_title">Select formats</h3>
          <section className="configPlatforms">
            <ul className="listPlatform">
              <li className="listPlatform_item">
                <Checkbox labelRight="Image or video" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Carousel" />
              </li>
            </ul>
            <Input value={'5'} label="Number of carousel images" />
          </section>
        </section>
      </section>
      <section className="plataformsConfig">
        <h2 className="plataformsConfig_title">SONA</h2>
        <section className="contentPlatformConfig">
          <h3 className="contentPlatformConfig_title">Select Templates</h3>
          <section className="configPlatforms">
            <ul className="listPlatform">
              <li className="listPlatform_item listPlatform_item__title">
                Facebook
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Facebook" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Instragram" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Story" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="TikTok" />
              </li>
            </ul>
          </section>

          <h3 className="contentPlatformConfig_title">Select formats</h3>
          <section className="configPlatforms">
            <ul className="listPlatform">
              <li className="listPlatform_item">
                <Checkbox labelRight="Image or video" />
              </li>
              <li className="listPlatform_item">
                <Checkbox labelRight="Carousel" />
              </li>
            </ul>
            <Input value={'5'} label="Number of carousel images" />
          </section>
        </section>
      </section>
      <footer className="footerNewMatrix">
        <Button
          hierarchy="secondary"
          onClick={() =>
            navigate({ pathname: `/${DiscoPaths.CreativeMatrix}` })
          }>
          Cancel
        </Button>
        <Button
          onClick={() =>
            navigate({ pathname: `/${DiscoPaths.NewMatrixStep2}` })
          }>
          Next
        </Button>
      </footer>
    </Layout>
  );
};

export default NewMatrixStep2;
