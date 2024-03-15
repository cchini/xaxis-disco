import React, { FC } from 'react';
import { NewMatrix } from '@models/creativeMatrix.model';
import { Input } from '@components/index';

interface NewMatrixTableProps {
  data: NewMatrix[];
  setOpen: (value: boolean) => void;
}

const NewMatrixTable: FC<NewMatrixTableProps> = props => {
  const { data, setOpen } = props;

  return (
    <section className="contentTableNewMatrix">
      <section className="table">
        <ul className="headerTable">
          <li className="headerTable_item"></li>
          <li className="headerTable_item">Disco ID</li>
          <li className="headerTable_item">Reporting label</li>
          <li className="headerTable_item">Instagram Account ID</li>
          <li className="headerTable_item">Instagram Campaign ID</li>
          <li className="headerTable_item">Facebook Account ID</li>
          <li className="headerTable_item">Facebook Campaign ID</li>
          <li className="headerTable_item">Facebook Ad set ID</li>
          <li className="headerTable_item">TikTok Account ID</li>
          <li className="headerTable_item">TikTok Campaign ID</li>
          <li className="headerTable_item">TikTok Ad set ID</li>
          <li className="headerTable_item">Main image/video</li>
          {data[0].carousel?.map((_, index) => (
            <>
              <li className="headerTable_item">{`Carousel image ${
                index + 1
              }`}</li>
              <li className="headerTable_item">{`Carousel title ${
                index + 1
              }`}</li>
              <li className="headerTable_item">{`Carousel account ${
                index + 1
              }`}</li>
              <li className="headerTable_item">{`Carousel url ${
                index + 1
              }`}</li>
            </>
          ))}
        </ul>
        {data?.map(item => (
          <ul className="contentTable">
            <li className="contentTable_item ">
              <button className="iconActionsNewMatrix2">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
                Remove
              </button>
            </li>
            <li className="contentTable_item">{item?.discoId}</li>
            <li className="contentTable_item">{item?.reportingLabel}</li>

            <li className="contentTable_item">{item.instagram?.pageId}</li>
            <li className="contentTable_item">
              {item.instagram?.campaignId || <Input />}
            </li>

            <li className="contentTable_item">{item.facebook?.pageId}</li>
            <li className="contentTable_item">
              {item.facebook?.campaignId || <Input />}
            </li>
            <li className="contentTable_item">{item.facebook?.adSetId}</li>

            <li className="contentTable_item">{item.tiktok?.pageId}</li>
            <li className="contentTable_item">
              {item.tiktok?.campaignId || <Input />}
            </li>
            <li className="contentTable_item">{item.tiktok?.adSetId}</li>
            <li className="contentTable_item">
              <button
                className="iconActionsNewMatrix2"
                onClick={() => setOpen(true)}>
                <span className="iconXaxis iconXaxis-plus"></span>
                Add asset
              </button>
            </li>
            {item.carousel?.length > 0 && (
              <>
                {item?.carousel?.map(value => (
                  <>
                    <li className="contentTable_item">
                      <button
                        className="iconActionsNewMatrix2"
                        onClick={() => setOpen(true)}>
                        <span className="iconXaxis iconXaxis-plus"></span>
                        Add asset
                      </button>
                    </li>
                    <li className="contentTable_item">
                      {value?.title || <Input />}
                    </li>
                    <li className="contentTable_item">
                      {value?.account || <Input />}
                    </li>
                    <li className="contentTable_item">
                      {value?.url || <Input />}
                    </li>
                  </>
                ))}
              </>
            )}
          </ul>
        ))}
      </section>
    </section>
  );
};

export default NewMatrixTable;
