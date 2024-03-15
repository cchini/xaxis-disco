import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Switch } from '@components/index';
import Layout from '../../common/Layout/Layout';
import './viewCampaign.scss';

const ViewCampaign = () => {
  const navigate = useNavigate();

  return (
    <Layout className="campaignsNewPage">
      <h1 className="campaignsNewPage_title">Preview</h1>
      <nav className="navCampaign">
        <div className="contentEnabledDisabled">
          <label className="contentEnabledDisabled_label">
            Show/Hide plataforms
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
      <section className="cntPreview">
        <aside className="asideFiles">
          <ol className="listCampaigns">
            <p className="listCampaigns_item listCampaigns_item__title">
              <span className="iconXaxis iconXaxis-images"></span> Campaign
              preview
            </p>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
            <li className="listCampaigns_item">
              Audience | Week day | Part day
            </li>
          </ol>
        </aside>
        <section className="campaingContentPreview">
          <h2 className="campaingContentPreview_title">
            <span className="iconXaxis iconXaxis-tiktok"></span>
            TikTok
          </h2>
          <section className="contentPreviews">
            <article className="cardPreview">
              <header className="cardPreview_header">
                <h3 className="titlePlatformPreview"> Reel</h3>
              </header>
              <figure className="contentImgPreview">
                <img />
              </figure>
            </article>
            <article className="cardPreview">
              <header className="cardPreview_header">
                <h3 className="titlePlatformPreview"> Reel</h3>
              </header>
              <figure className="contentImgPreview">
                <img />
              </figure>
            </article>
            <article className="cardPreview">
              <header className="cardPreview_header">
                <h3 className="titlePlatformPreview"> Reel</h3>
              </header>
              <figure className="contentImgPreview">
                <img />
              </figure>
            </article>
          </section>
        </section>
      </section>

      <footer className="footerNewCampaign">
        <Button
          hierarchy="secondary"
          className="footerNewCampaign_btn"
          onClick={() => navigate(`/${DiscoPaths.Campaigns}`)}>
          Volver
        </Button>
      </footer>
    </Layout>
  );
};

export default ViewCampaign;
