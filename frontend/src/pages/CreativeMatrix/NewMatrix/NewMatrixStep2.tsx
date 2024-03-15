import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button, Modal, Switch, DragDropFile } from '@components/index';
import Layout from '../../common/Layout/Layout';
import NewMatrixTable from '../components/NewMatrixTable/NewMatrixTable';
import { newMatrixTable } from '@mocks/newMatrix.mock';
import './newMatrix.scss';

const NewMatrixStep2 = () => {
  const [open, setOpen] = useState(false);
  const [dataMatrix, setDataMatrix] = useState(newMatrixTable);
  const navigate = useNavigate();
  const [newAssetsMatrix, setNewAssetsMatrix] = useState({
    assetsImages: [],
  });

  const updateUploadedFiles = files =>
    setNewAssetsMatrix({ ...newAssetsMatrix, assetsImages: files });

  const handleAddCarousel = () => {
    const data = [...dataMatrix];

    const newData = data?.map(item => {
      const itemclone = { ...item };
      const first = { ...data[0] };
      first.carousel.push({
        image: null,
        title: null,
        account: null,
        url: null,
      });
      itemclone.carousel = first.carousel;
      return itemclone;
    });
    setDataMatrix(newData);
  };

  const handleAddItem = () => {
    const data = [...dataMatrix];
    const newItem = { ...newMatrixTable[0] };
    newItem.discoId = (data.length + 1).toString();
    newItem.reportingLabel = null;
    newItem.instagram.campaignId = null;
    newItem.facebook.campaignId = null;
    newItem.tiktok.campaignId = null;
    data.push(newItem);
    setDataMatrix(data);
  };
  console.debug(dataMatrix);
  return (
    <Layout className="newCreativeMatrixPage">
      <Modal
        className="modalCreativeMatrixAdd"
        active={open}
        onClose={() => setOpen(false)}
        header={
          <header className="headerModalCreativeMatrixAssets">
            <h3 className="headerModalCreativeMatrixAssets_title">
              Select your asset
            </h3>
          </header>
        }>
        <section className="modalAssetsContent">
          <div className="library">
            <h4 className="library_title">Asset Library</h4>
            <ul className="principalList">
              <li className="principalList_item principalList_item__title">
                2022 may getircampaign name
              </li>
              <ul title="Images" className="secondaryList">
                <li className="secondaryList_item secondaryList_item__title">
                  <span className="iconXaxis iconXaxis-folder"></span>
                  IMAGES
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 01
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 02
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 03
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 04
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 05
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-image"></span>image 06
                </li>
              </ul>
              <ul title="Images" className="secondaryList">
                <li className="secondaryList_item secondaryList_item__title">
                  <span className="iconXaxis iconXaxis-folder"></span>
                  Videos
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 01
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 02
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 03
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 04
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 05
                </li>
                <li className="secondaryList_item">
                  <span className="iconXaxis iconXaxis-video"></span>video 06
                </li>
              </ul>
            </ul>
          </div>
          <DragDropFile
            accept=".jpg,.png,.jpeg"
            label=""
            updateFilesCb={updateUploadedFiles}
          />
        </section>

        <footer className="footerModal">
          <Button onClick={() => setOpen(false)} hierarchy="secondary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Continue</Button>
        </footer>
      </Modal>
      <h1 className="newCreativeMatrixPage_title">Creative Matrix/New</h1>

      {/* Sección de cards de redes sociales */}
      <nav className="navMatrix navMatrix__step2">
        <div className="contentEnabledDisabled">
          <label className="contentEnabledDisabled_label">
            Enable/Disabled plataforms
          </label>
          <ul className="listOptions">
            <li className="listOptions_item">
              <Switch
                label={
                  <div className="labelsIcons">
                    <span className="iconXaxis  iconXaxis-facebook-f"></span>
                  </div>
                }
                className="switchAvailable"
                name="facebook"
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
        <div className="contentActions">
          <Button
            className="contentActions_btn"
            onClick={() => handleAddCarousel()}>
            <span className="iconXaxis iconXaxis-plus"></span>Add carousel card
          </Button>
          <Button className="contentActions_btn">
            <span className="iconXaxis iconXaxis-trash-alt"></span> Remove last
            carousel card
          </Button>
        </div>
      </nav>

      {/* Sección tabla */}
      <NewMatrixTable data={dataMatrix} setOpen={setOpen} />
      <Button
        onClick={() => handleAddItem()}
        className="newCreativeMatrixPage_btn">
        <span className="iconXaxis iconXaxis-plus"></span> Add
      </Button>
      <footer className="footerNewMatrix">
        <Button
          hierarchy="secondary"
          onClick={() =>
            navigate({ pathname: `/${DiscoPaths.NewMatrixStep1}` })
          }>
          Cancel
        </Button>
        <Button onClick={() => navigate(`/${DiscoPaths.CreativeMatrix}`)}>
          Save
        </Button>
      </footer>
    </Layout>
  );
};

export default NewMatrixStep2;
