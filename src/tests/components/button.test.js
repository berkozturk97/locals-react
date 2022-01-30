import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ItemTypes } from '../../constants/item-types';
import Products from '../../containers/Products';
import ProviderPage from '../provider';

// throwing matchMedia error
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

describe('Get product button text', () => {
  it('should render same text in Global file text', async () => {
    render(
      <ProviderPage>
        <Products />
      </ProviderPage>,
    );
    const mugButtonText = screen.getByText(ItemTypes.MUG);
    const shirtButtonText = screen.getByText(ItemTypes.SHIRT);
    expect(mugButtonText).toBeInTheDocument();
    expect(shirtButtonText).toBeInTheDocument();
  });
});
