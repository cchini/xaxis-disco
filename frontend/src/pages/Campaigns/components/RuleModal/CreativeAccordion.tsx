import React from 'react';
import { Button } from '@components/index';

const CreativeAccordion = () => {
  return (
    <details className="accordion">
      <summary className="accordion_title">Assign creatives</summary>
      <article className="cntItemAccordion cntItemAccordion__table">
        <section className="table cntItemAccordion_table">
          <ul className="headerTable">
            <li className="headerTable_item">Disco ID</li>
            <li className="headerTable_item">Ad name</li>
            <li className="headerTable_item">Creative type</li>
            <li className="headerTable_item">Preview</li>
            <li className="headerTable_item headerTable_item__actions"></li>
          </ul>

          <ul className="contentTable">
            <li className="contentTable_item">01</li>
            <li className="contentTable_item">Audience | Weekday...</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">
              <figure>IMG</figure>
            </li>
            <li className="contentTable_item contentTable_item__actions">
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
          <ul className="contentTable">
            <li className="contentTable_item">02</li>
            <li className="contentTable_item">Audience | Weekday...</li>
            <li className="contentTable_item">1290877748484849</li>
            <li className="contentTable_item">
              <figure>
                {/* Acá debe ir la imagén */}
                IMG
                <img />
              </figure>
            </li>
            <li className="contentTable_item contentTable_item__actions">
              <button className="btnRemoveRow">
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
        </section>
        <Button
          hierarchy="secondary"
          className="cntItemAccordion_btn cntItemAccordion_btn__plus">
          <span className="iconXaxis iconXaxis-plus"></span>
        </Button>
      </article>
    </details>
  );
};

export default CreativeAccordion;
