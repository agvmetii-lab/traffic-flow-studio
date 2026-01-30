import { motion } from "framer-motion";
import { Heart, Gift, Star } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐰</span>
            <span className="font-display text-xl font-semibold text-foreground">
              Bunny Hill
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sale" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Распродажа
            </a>
            <a href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Каталог
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Преимущества
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-golden fill-golden" />
              <span>Скидки до 70%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
