/**
 *  @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useInitData from './useInitData';

describe('disco-app/use-init-data', () => {
  beforeAll(() => {
    process.env = { DISCO_API: 'http://localhost:8200/disco/api' };
  });

  it('hook data test', async () => {
    const { result } = renderHook(() => {
      return useInitData();
    });

    act(() => {
      result.current[0] = [
        {
          account: null,
          label: 'label',
          value: 'value',
        },
      ];
      result.current[1] = [
        {
          id: '0',
          name: 'name',
          statusId: '0',
          status: {
            id: '0',
            name: 'name',
            code: 'code',
          },
          accountId: '0',
          deleted: false,
          created: new Date(),
          modified: new Date(),
          value: 'value',
          label: 'label',
          typeDescription: 'description',
        },
      ];
    });

    await waitFor(() => {
      console.log(result.current[0]);
      console.log(result.current[1]);
    });
  });
});
