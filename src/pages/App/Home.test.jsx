import { renderTheme } from '../../styles/render-theme';
import Home from './Home';
import { screen } from '@testing-library/dom';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
