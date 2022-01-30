import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Global } from '../../constants/global';
import Filters from '../../containers/Filters';
import ProviderPage from '../provider';

// throwing matchMedia error
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

describe('Get placeholder texts in Filters section', () => {
  it('should render same text in Global file text', async () => {
    render(
      <ProviderPage>
        <Filters />
      </ProviderPage>,
    );
    const brandPlaceHolderText = screen.getByPlaceholderText(Global.SEARCH_BRAND);
    const tagPlaceHolderText = screen.getByPlaceholderText(Global.SEARCH_TAG);
    expect(brandPlaceHolderText).toBeInTheDocument();
    expect(tagPlaceHolderText).toBeInTheDocument();
  });
});
