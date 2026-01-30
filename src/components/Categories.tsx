import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import winterImage from "@/assets/winter-collection.jpg";
import toysImage from "@/assets/toys-collection.jpg";
import decorImage from "@/assets/decor-collection.jpg";

interface CategoriesProps {
  affiliateLink: string;
}

const categories = [
  {
    id: 1,
    title: "Зимняя коллекция",
    description: "Теплая одежда и аксессуары для холодов",
    image: winterImage,
    badge: "Хит сезона",
    discount: "-50%",
  },
  {
    id: 2,
    title: "Игрушки",
    description: "Развивающие игрушки из натуральных материалов",
    image: toysImage,
    badge: "Новинки",
    discount: "-40%",
  },
  {
    id: 3,
    title: "Декор детской",
    description: "Уютные мелочи для волшебной атмосферы",
    image: decorImage,
    badge: "Популярное",
    discount: "-60%",
  },
];

const Categories = ({ affiliateLink }: CategoriesProps) => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Популярные категории
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбирайте лучшее для вашего малыша среди проверенных европейских брендов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer"
              onClick={() => window.open(affiliateLink, "_blank")}
            >
              {/* Discount badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold">
                {category.discount}
              </div>
              
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                  {category.badge}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Смотреть
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open(affiliateLink, "_blank")}
            className="group"
          >
            Смотреть весь каталог
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
