import { FunctionComponent } from 'react';
import DokanIcon from './DokanIcon';
export interface SimpleHeaderProps {
  title?: string;
  subtitle?: string;
}

const SimpleHeader: FunctionComponent<SimpleHeaderProps> = (props) => {
  return (
    <>
      <section className="flex flex-col items-center mt-6">
        <DokanIcon />
        <p className="text-xl mt-4">{props.title}</p>
        {props.subtitle && <p className="text-sm text-gray-500 mt-4">{props.subtitle}</p>}
      </section>
    </>
  );
};

export default SimpleHeader;
