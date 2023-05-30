import classes from './bread-crumbs.module.css';

type SectionTitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h1 className="title">{text}</h1>;
};
