import { Helmet } from '@modern-js/runtime/head';
import intl from 'react-intl-universal';

interface IHeadProps {
  title: string;
}

const Header: React.FC<IHeadProps> = (props: IHeadProps) => {
  const { title } = props;
  return (
    <Helmet>
      <title>
        {title} - {intl.get('app_name')}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Helmet>
  );
};
export default Header;
