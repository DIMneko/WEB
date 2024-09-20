import "./scss/Mneko_Header.scss";

interface MnekoHeaderProp {
  site_title: string;
}

const Mneko_Header = ({ site_title }: MnekoHeaderProp) => {
  return (
    <>
      <header className="Mneko_header">
        <div className="Mneko_inner">
          <h2>{site_title}</h2>
        </div>
      </header>
    </>
  );
};
export default Mneko_Header;
