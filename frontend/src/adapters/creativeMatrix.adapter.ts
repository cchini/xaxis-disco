import { CreativeMatrix, TemplateMatrix } from '../models/creativeMatrix.model';

export const allCreativeMatrixAdapter = (
  data: any,
  isSelector: boolean = false,
): CreativeMatrix[] => {
  const matrixList = data?.creativeMatrixList;
  const response = matrixList?.map(value => {
    let matrix: CreativeMatrix = {
      id: value?.id,
      name: value?.name,
      statusId: value?.statusId,
      status: value?.status,
      accountId: value?.accountId,
      deleted: value?.deleted,
      created: value?.created,
      modified: value?.modified,
      typeDescription: value?.typeDescription,
    };
    if (isSelector)
      matrix = { ...matrix, label: value?.name, value: value?.id };

    return matrix;
  });
  return response;
};

export const templateListAdapter = (data: any): TemplateMatrix[] => {
  const templateMock = data;
  const response = templateMock?.map(value => {
    const template: TemplateMatrix = {
      id: value?.id,
      title: value?.title,
      platforms: value?.platforms,
    };
    return template;
  });
  return response;
};
