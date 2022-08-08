import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
  name: 'Domestic landscape',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: '4'
};
const mockToggleModal = jest.fn();

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect({ asFragment }).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText('Close this modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
