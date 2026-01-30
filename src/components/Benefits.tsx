import { motion } from "framer-motion";
import { Truck, Shield, Heart, Gift, Star, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Доставим по всей России от 1 до 5 дней",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Только сертифицированные товары от проверенных брендов",
  },
  {
    icon: Heart,
    title: "Забота о детях",
    description: "Экологичные материалы, безопасные для малышей",
  },
  {
    icon: Gift,
    title: "Подарочная упаковка",
    description: "Красивая упаковка для особенных подарков",
  },
  {
    icon: Star,
    title: "Премиум бренды",
    description: "LIEWOOD, Konges Slojd, Bloomingville и другие",
  },
  {
    icon: RefreshCw,
    title: "Легкий возврат",
    description: "14 дней на возврат без вопросов",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bunny Hill — это не просто магазин, это место, где рождается счастливое детство
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
