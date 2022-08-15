export default function Design() {
  return (
    <div>
      <h2 className="section-title">Cubification</h2>
      <div className="tw-flex-col tw-justify-center">
        <img
          className="image-with-aspect tw-mx-0"
          src={require("./WhistlerPhoto.jpg")}
        />
        <img
          className="image-with-aspect tw-mt-2 tw-mx-0"
          style={{ width: "1332px" }}
          src={require("./WhistlerPurple.jpg")}
        />
      </div>
    </div>
  );
}
