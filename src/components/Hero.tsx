import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gift } from "lucide-react";
import heroImage from "@/assets/hero-kids-room.jpg";

interface HeroProps {
  affiliateLink: string;
}

const Hero = ({ affiliateLink }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Уютная детская комната"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 text-6xl opacity-20 hidden lg:block"
      >
        🐰
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 text-4xl opacity-15 hidden lg:block"
      >
        ⭐
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush/50 border border-primary/20 mb-6"
          >
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Зимняя распродажа — скидки до 70%
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Счастливое детство 
            <span className="block text-gradient">начинается здесь</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Премиальные игрушки, одежда и декор от лучших скандинавских брендов. 
            Создайте уют и волшебство для вашего малыша.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open(affiliateLink, "_blank")}
              className="group"
            >
              <Sparkles className="w-5 h-5" />
              Перейти в магазин
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border/50"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <span className="text-sm text-muted-foreground">Бесплатная доставка</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm text-muted-foreground">Топ-бренды</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💝</span>
              <span className="text-sm text-muted-foreground">100% качество</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
