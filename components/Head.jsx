import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tinh Tran is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nitin, Tinh Tran, ranganath, web developer, nitin web developer, nitin developer, mern stack, nitin portfolio"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tinh Tran',
};
