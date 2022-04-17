type Props = {
  title: string;
};

const HeaderTitle = ({ title }: Props) => {
  return (
    <div className="justify-between items-center flex w-auto">
      <h1 className="text-3xl xl:text-4xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default HeaderTitle;
