const Footer = () => (
  <footer className="py-12 bg-black/95 border-t border-white/10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6 text-white/60 text-sm">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <span className="font-bold text-white text-lg">BM AI</span>
        <span>© {new Date().getFullYear()} BM AI. All rights reserved.</span>
        <a href="/about" className="hover:text-white">About</a>
        <a href="/privacy" className="hover:text-white">Privacy</a>
        <a href="/terms" className="hover:text-white">Terms</a>
        <a href="/legal" className="hover:text-white">Legal</a>
      </div>
      <div>
        <span>Nairobi, Kenya | bm@payl.to | +254 - 743 - 799799</span>
      </div>
    </div>
  </footer>
);

export default Footer; 