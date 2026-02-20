import Wave from "react-wavify";

export function WaveEffect() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-70 pointer-events-none z-0 overflow-hidden">
      <Wave
        fill="rgba(0, 0, 0, 0.5)"
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Wave
        fill="rgba(255, 255, 255, 0.1)"
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.2,
          points: 3,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
