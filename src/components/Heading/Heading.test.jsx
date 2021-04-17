import { screen } from '@testing-library/dom';
import { Heading } from '.';
import { renderTheme } from "../../styles/render-theme";
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should with default values', () => {
    renderTheme(<Heading>Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none'
    });    
  });
  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      color: theme.colors.white
    });    
  });
  it('should render correct heading size small', () => {
    renderTheme(<Heading size="small">Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium
    });    
  });
  it('should render correct heading size big', () => {
    renderTheme(<Heading size="big">Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge
    });
  });
  it('should render correct heading size medium', () => {
    renderTheme(<Heading size="medium">Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large
    });    
  });
  it('should render correct font size when using mobile', () => {
    renderTheme(<Heading size="huge">Texto</Heading> );
    expect(screen.getByRole('heading', { name: 'Texto'}))
      .toHaveStyleRule(
        'font-size', 
        theme.font.sizes.xlarge,
        {
          media: theme.media.lteMedium
        }
      );
  });
  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading> );
    const heading = screen.getByRole('heading', { name: 'Texto'});
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    });
  });
  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'Texto'});
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});