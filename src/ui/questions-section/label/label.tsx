import classes from './bread-crumbs.module.css';

type SectionTitleProps = {
  text: string;
  htmlFor: string;
};

export const Label = ({ text, htmlFor }: SectionTitleProps) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={htmlFor}>
        {text}
      </label>
      <span className="tooltip"></span>
    </div>
  );
};
