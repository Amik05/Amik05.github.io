const ProjectsContent = () => {
  return (
    <div className="flex items-center mx-10 gap-10">
      <img src="/apple.png" alt="orange" className="w-50" />
      <div className="mr-10 text-black/80 dark:text-white flex flex-col gap-2">
        <h1 className="text-3xl my-2">projects</h1>
        <a
          href="https://github.com/Amik05"
          target="_blank"
          rel="noopener noreferrer"
        >
          -* click here *-
        </a>
      </div>
    </div>
  );
};

export default ProjectsContent;
