import {
  BACKEND_URL,
  GET_EVENT_DATA,
  UPDATE_EVENT_DATA,
} from '../../../constants/apiEndPoints';
import makeRequest from '../makeRequest';
import axios from 'axios';

jest.mock('axios');

describe('makeRequest', () => {
  const mockData = [
    {
      id: 1,
      name: 'Battle of the Bands',
      description:
        'Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won\'t want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don\'t miss out on the most unforgettable rock competition of the year!',
      venue: 'All Stars Arena, Las Vegas, NV, USA',
      datetime: '2023-03-01T05:00:00.000Z',
      timezone: 'America/Los_Angeles',
      areSeatsAvailable: true,
      isRegistered: false,
      isBookmarked: false,
      imgUrl: 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg',
    },
  ];
  it('should make api call when only api endpoint is passed', async () => {
    const mockAxiosData = axios.mockResolvedValue({ data: mockData });
    expect(mockAxiosData).not.toBeCalled();
    const response = await makeRequest(GET_EVENT_DATA);
    expect(mockAxiosData).toHaveBeenCalledTimes(1);
    expect(mockAxiosData).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'events',
      method: 'get',
    });
    expect(response).toEqual(mockData);
  });
  it('should make api call when both api endpoint and body is passed', async () => {
    const mockAxiosData = axios.mockResolvedValue({
      data: { data: { isRegistered: true } },
    });
    expect(mockAxiosData).not.toBeCalled();
    const response = await makeRequest(UPDATE_EVENT_DATA(1), {
      data: {
        isRegistered: true,
      },
    });
    expect(mockAxiosData).toHaveBeenCalledTimes(1);
    expect(mockAxiosData).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: 'events/1',
      method: 'patch',
      data: {
        isRegistered: true,
      },
    });
    expect(response).toEqual({
      data: {
        isRegistered: true,
      },
    });
  });
});
