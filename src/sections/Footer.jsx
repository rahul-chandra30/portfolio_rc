const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon flex justify-center items-center">
  <a href="https://github.com/rahul-chandra30" target="_blank" rel="noopener noreferrer">
    <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
  </a>
</div>
        <div className="social-icon flex justify-center items-center">
  <a href="https://www.instagram.com/its_rahul.c_/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/instagram.svg" alt="instagram" className="w-8 h-8" />
  </a>
</div>
      </div>

      <p className="text-white-500">© 2024 Rahul Chandra. All rights reserved.</p>
    </footer>
  );
};

export default Footer;