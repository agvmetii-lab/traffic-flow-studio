const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐰</span>
            <span className="font-display font-semibold text-foreground">Bunny Hill</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Реклама. Рекламодатель ООО "Банни Хилл"
          </p>
          
          <p className="text-xs text-muted-foreground">
            erid: 2bL9aMPo2e49hMef4pfyz9zt5N
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
