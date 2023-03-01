import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import EventCards from '../EventCards';
import makeRequest from '../../../../utils/makeRequest/makeRequest';
jest.mock('../../../../utils/makeRequest/makeRequest');

describe('all songs', () => {
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
  it('should show loading when the data is being rendered', async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<EventCards/>);
    expect(screen.getByText('Loading...')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText('Battle of the Bands')).toBeTruthy();
    });
  });
  it('should show the event posts when the data is coming from the backend', async () => {
    makeRequest.mockResolvedValue(mockData);
    render(<EventCards />);
    await waitFor(() => {
      expect(screen.getAllByTestId('events')).toHaveLength(1);
    });
  });
});
