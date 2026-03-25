const ContactContent = () => {
  return (
    <div className="flex items-center mx-10 gap-10 ">
      <img src="/orange.png" alt="orange" className="w-50" />
      <div className="mr-10 text-black/80 dark:text-white flex flex-col gap-2">
        <h1 className="text-3xl my-2">contact me</h1>
        <a href="mailto:amatianiu@gmail.com">amatianiu@gmail.com</a>
      </div>
    </div>
  );
};

export default ContactContent;
