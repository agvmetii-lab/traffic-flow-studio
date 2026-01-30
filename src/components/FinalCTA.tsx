import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  affiliateLink: string;
}

const FinalCTA = ({ affiliateLink }: FinalCTAProps) => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🐰
          </motion.div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Подарите ребёнку
            <span className="block text-gradient">волшебство</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Не упустите шанс порадовать малыша качественными игрушками и одеждой 
            со скидками до 70%. Предложение ограничено!
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.open(affiliateLink, "_blank")}
              className="group text-lg"
            >
              <Sparkles className="w-5 h-5" />
              Перейти к покупкам
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Официальный магазин • Безопасная оплата • Гарантия качества
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
