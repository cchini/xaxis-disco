import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from '@components/index';
import { TemplateMatrix } from '@models/creativeMatrix.model';
import TemplatePlatform from './TemplatePlatform';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateModalProps {
  data: TemplateMatrix;
  openModal: (open: boolean) => void;
  activeModal: boolean;
}

const TemplateModal: FC<TemplateModalProps> = props => {
  const { data, openModal, activeModal } = props;
  const navigate = useNavigate();
  return (
    <Modal
      className="modalCreativeMatrix"
      active={activeModal}
      onClose={() => openModal(false)}
      header={
        <header className="headerModalCreativeMatrix">
          <div className="headerModalCreativeMatrixTitle">
            <p className="headerModalCreativeMatrixTitle_detail">Template</p>
            <h3 className="headerModalCreativeMatrixTitle_context">
              {data?.title}
            </h3>
          </div>
          <Button
            onClick={() => openModal(false)}
            className="headerModalCreativeMatrix_btn"
            hierarchy="secondary">
            X
          </Button>
        </header>
      }>
      <section className="modalCreativeMatrixContent">
        <p className="modalCreativeMatrixContent_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
          temporibus culpa nisi dolorem, voluptas, iusto illum quas dicta ad
          similique repudiandae veritatis aperiam nobis tempora cum velit itaque
          beatae. Quia?
        </p>
        <TemplatePlatform data={data?.platforms} />
      </section>
      <footer className="footerModal">
        <Button onClick={() => openModal(false)} hierarchy="secondary">
          Cancel
        </Button>
        <Button onClick={() => navigate(`/${DiscoPaths.NewMatrixStep2}`)}>
          Select
        </Button>
      </footer>
    </Modal>
  );
};

export default TemplateModal;
