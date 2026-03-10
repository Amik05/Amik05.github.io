const AboutContent = () => {
  return (
    <div className="flex items-center mx-10 gap-10 border-b-2 border-black/50 dark:border-white/80">
      <img src="/orange.png" alt="orange" className="w-50" />
      <div className="mr-10 text-black/80 dark:text-white flex flex-col gap-2">
        <h1 className="text-3xl my-2">amir matianiu</h1>
        <p>"learn everything, try everything"</p>
      </div>
    </div>
  );
};

export default AboutContent;
