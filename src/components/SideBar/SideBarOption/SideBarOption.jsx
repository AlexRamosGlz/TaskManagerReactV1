function SideBarOption({ svgSrc, label }) {
  return (
    <div className="side-bar--option">
      <img src={svgSrc} alt={`svg ${label}`} />
      {label}
    </div>
  );
}

export default SideBarOption;
