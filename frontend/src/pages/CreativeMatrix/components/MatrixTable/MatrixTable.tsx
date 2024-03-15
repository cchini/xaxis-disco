import React, { FC, useState } from 'react';
import { Button } from '@components/index';
import { CreativeMatrix } from '@models/creativeMatrix.model';

interface MatrixTableProps {
  data: CreativeMatrix[];
}

interface SimulateAction {
  status: 'Active' | 'Pending';
  id: string;
}

const MatrixTable: FC<MatrixTableProps> = props => {
  const { data } = props;
  const [simulate, setSimulate] = useState<SimulateAction>(null);

  const handleSimulateAction = (id: string) => {
    setSimulate({ id, status: 'Pending' });
    setTimeout(() => {
      setSimulate(null);
    }, 2000);
  };

  return (
    <section className="table">
      <ul className="headerTable">
        <li className="headerTable_item headerTable_item__status">Status</li>
        <li className="headerTable_item headerTable_item__actions">Actions</li>
        <li className="headerTable_item">ID</li>
        <li className="headerTable_item">Name</li>
        <li className="headerTable_item">Type</li>
        <li className="headerTable_item">Last update</li>
      </ul>
      {data?.map(matrix => (
        <ul key={matrix?.id} className="contentTable">
          <li className="contentTable_item contentTable_item__status">
            {simulate?.id && simulate?.id === matrix?.id
              ? simulate?.status
              : matrix?.status?.name}
          </li>
          <li className="contentTable_item contentTable_item__actions">
            <button className="iconActionsCreativeMatrix">
              <span className="iconXaxis iconXaxis-edit"></span>
              Edit
            </button>
            <button
              className="iconActionsCreativeMatrix"
              onClick={() => handleSimulateAction(matrix?.id)}>
              <span className="iconXaxis iconXaxis-edit"></span>
              Refresh
            </button>
            <button
              className="iconActionsCreativeMatrix"
              onClick={() => handleSimulateAction(matrix?.id)}>
              <span className="iconXaxis iconXaxis-edit"></span>
              Publish
            </button>
          </li>
          <li className="contentTable_item">{matrix?.id}</li>
          <li className="contentTable_item">{matrix?.name}</li>
          <li className="contentTable_item">{matrix?.typeDescription}</li>
          <li className="contentTable_item">{matrix?.modified?.toString()}</li>
        </ul>
      ))}
    </section>
  );
};

export default MatrixTable;
