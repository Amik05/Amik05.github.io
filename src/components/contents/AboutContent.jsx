const AboutContent = () => {
  return (
    <div className="mx-10 text-black/80 dark:text-white">
      <div className="flex items-center justify-center gap-10 border-b-1 border-black/50 dark:border-white/80">
        <img src="/lego.png" alt="orange" className="w-40" />
        <div className="mr-10 flex items-center flex-col gap-2">
          <h1 className="text-3xl my-2">amir matianiu</h1>
          <p>"learn everything, try everything"</p>
        </div>
      </div>
      <div className="my-8">
        <p>hi! i'am amir, a CS student from vancouver</p>
        <p>my goal in life is to become than i was yesterday</p>
      </div>
    </div>
  );
};

export default AboutContent;
