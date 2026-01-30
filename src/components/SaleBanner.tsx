import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Percent, Clock, ArrowRight } from "lucide-react";

interface SaleBannerProps {
  affiliateLink: string;
}

const SaleBanner = ({ affiliateLink }: SaleBannerProps) => {
  return (
    <section id="sale" className="py-16 bg-gradient-to-r from-primary/10 via-blush/30 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-card shadow-card p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Ограниченное предложение
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Зимняя распродажа
                <span className="block text-gradient">до -70%</span>
              </h2>
              
              <p className="text-muted-foreground max-w-md">
                Любимые бренды LIEWOOD, Konges Slojd и THE NEW со скидками от 50%. 
                Успейте порадовать малышей!
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-full bg-gradient-cta flex items-center justify-center shadow-card"
                >
                  <Percent className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <div>
                  <div className="text-4xl font-display font-bold text-foreground">70%</div>
                  <div className="text-sm text-muted-foreground">максимальная скидка</div>
                </div>
              </div>
              
              <Button
                variant="cta"
                size="xl"
                onClick={() => window.open(affiliateLink, "_blank")}
                className="group w-full sm:w-auto"
              >
                Успеть купить
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SaleBanner;
