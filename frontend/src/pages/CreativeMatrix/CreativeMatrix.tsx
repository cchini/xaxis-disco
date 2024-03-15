import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import { Button, Input } from '@components/index';
import MatrixTable from './components/MatrixTable/MatrixTable';
import TemplateCard from './components/TemplateCard/TemplateCard';
import TemplateModal from './components/TemplateModal/TemplateModal';
import { TemplateMatrix } from '@models/creativeMatrix.model';
import { templateListAdapter } from '@adapters/creativeMatrix.adapter';
import { DiscoPaths } from '@routes/models/path.model';
import { data as dataTemplate } from '@mocks/templateMatrix.mock';
import Layout from '../common/Layout/Layout';
import './creativeMatrix.scss';

const CreativeMatrix = () => {
  const navigate = useNavigate();
  const store = useSelector((store: AppStore) => store.matrix);
  const [open, setOpen] = useState(false);
  const [templateSelected, setTempleteSelected] =
    useState<TemplateMatrix>(null);

  return (
    <Layout className="creativeMatrixPage">
      {/* Modal detail: Template matrix selected */}
      {templateSelected && (
        <TemplateModal
          activeModal={open}
          openModal={setOpen}
          data={templateSelected}
        />
      )}

      <h1 className="creativeMatrixPage_title">Creative Matrix</h1>
      {/* Template section */}
      <section className="templateTypes">
        <h2 className="templateTypes_title">Start with a Template</h2>
        <TemplateCard
          data={templateListAdapter(dataTemplate)}
          openModal={value => {
            setTempleteSelected(value);
            setOpen(true);
          }}
        />
      </section>
      {/* Creative matrix section */}
      <section className="contentTableCreativeMatrix">
        <div className="navTable">
          <div className="cntSearchTableCreativeMatrix">
            <Input
              placeholder="Search"
              className="cntSearchTableCreativeMatrix_input"
            />
            <Button className="cntSearchTableCreativeMatrix_btn">
              <span className="iconXaxis iconXaxis-search" />
            </Button>
          </div>
          <Button
            onClick={() => navigate(`/${DiscoPaths.NewMatrixStep1}`)}
            hierarchy="secondary">
            New
          </Button>
        </div>
        <MatrixTable data={store?.matrixList} />
      </section>
    </Layout>
  );
};

export default CreativeMatrix;
