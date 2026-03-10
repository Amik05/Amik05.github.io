const OtherContent = () => {
  return (
    <div className="flex items-center mx-10 gap-10 border-b-2 border-black/50 dark:border-white/80">
      <img src="../src/assets/rotatingCar.gif" alt="car" className="w-50" />
      <div className="mr-10 text-black/80 dark:text-white flex flex-col gap-2">
        <h1 className="text-3xl my-2">vrooom</h1>
        <p>"I am speed"</p>
      </div>
    </div>
  );
};

export default OtherContent;
