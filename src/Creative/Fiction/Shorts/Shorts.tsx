export default function Shorts() {
  return (
    <div>
      <h2 className="section-title">Windy Gates</h2>
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center">
        <div>
          <img
            className="image-with-aspect"
            src={require("./windyGates.jpg")}
          />
        </div>
        <div
          className="tw-py-4 tw-text-xs md:tw-px-6 md:tw-text-base"
          style={{ color: "#113148" }}
        >
          <p>The gate is unkept and wide open,</p>
          <p>but who in their right mind would pass through</p>
          <p>when the other side is unknown and uncomfortable?</p>
          <p></p>
          <p>One day we'll all pass through the gate,</p>
          <p>each of us defined by the terrain we avoided,</p>
          <p>the terrain we conquered and confronted.</p>
          <p></p>
          <p>As I hurdle toward the gate of oblivion,</p>
          <p>I wonder where freedom lies.</p>
          <p>Can I control the winds which whisk me toward the gate?</p>
          <p>Or is freedom found in forfeit?</p>
          <p></p>
          <p>Perhaps freedom is which gates we pass through,</p>
          <p>and which we avoid,</p>
          <p>each of us morally justified in our own eyes;</p>
          <p>condemned in the eyes of others.</p>
          <p></p>
          <p>With unyielding wind at our backs,</p>
          <p>I see some dig their fingernails into the posts of the gates,</p>
          <p>fighting desperately for control, for comfort, for stagnation.</p>
          <p></p>
          <p>Surrender to the wind,</p>
          <p>parasail through the gates,</p>
          <p>deaf to the cries of the virtuous post-grabbers.</p>
          <p></p>
          <p>(You already know though, that's the motto: YOLO)</p>
        </div>
      </div>
    </div>
  );
}
