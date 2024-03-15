import React, { FC } from 'react';
import { PagePlatform, RRSS } from '@models/public.model';
import { facebook, instagram, tiktok, sona } from '@mocks/placements.mock';

interface TemplatePlatformProps {
  data: PagePlatform[];
}

const TemplatePlatform: FC<TemplatePlatformProps> = props => {
  const { data } = props;

  const defineRRSS = (platform: string) => {
    switch (platform) {
      case RRSS.Facebook:
        return facebook;
      case RRSS.Instagram:
        return instagram;
      case RRSS.TikTok:
        return tiktok;
      case RRSS.Sona:
        return sona;
      default:
        return null;
    }
  };

  return (
    <>
      {data?.map(platform => (
        <>
          {platform?.enabled && (
            <section key={platform?.code} className="plataformBussines">
              <h4 className="plataformBussines_title">{platform?.name}</h4>
              <section className="content">
                <div className="formats">
                  <h5 className="formats_title">Formats</h5>
                  <p className="formats_text">You can select one all formats</p>
                  <ul className="listFormts">
                    <li className="listFormts_item">
                      <span className="iconFromts iconXaxis iconXaxis-image"></span>
                      <span>Image</span>
                    </li>
                    <li className="listFormts_item">
                      <span className="iconFromts iconXaxis iconXaxis-video"></span>
                      <span>Video</span>
                    </li>
                    <li className="listFormts_item">
                      <span className="iconFromts iconXaxis iconXaxis-images"></span>
                      <span>Carousel</span>
                    </li>
                  </ul>
                </div>
                <div className="placements">
                  <h5 className="placements_title">Placements</h5>

                  <ul className="placementsList">
                    {defineRRSS(platform?.code)?.map(placement => (
                      <li className="placementsList_item">
                        {placement?.name}
                        <div className="placements_tooltip">
                          <figure className="imageTooltip">
                            <img className="imagePlataform" />
                          </figure>
                          <div className="info">
                            <h5 className="info_title">About this placement</h5>
                            <p className="info_text">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Impedit tempora expedita nobis
                              sapiente...
                            </p>
                            <h5 className="info_title">Dynamic elements</h5>
                            <ol className="infoList">
                              <li className="infoList_item">Caption</li>
                              <li className="infoList_item">
                                Image / Video / Carousel
                              </li>
                              <li className="infoList_item">URL</li>
                              <li className="infoList_item">Title</li>
                              <li className="infoList_item">Description</li>
                              <li className="infoList_item">CTA</li>
                            </ol>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </section>
          )}
        </>
      ))}
    </>
  );
};

export default TemplatePlatform;
