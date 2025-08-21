
import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';

const photos = [
    {
        title: "Homemade Pasta",
        imageUrl: "https://picsum.photos/seed/food1/600/600"
    },
    {
        title: "Sourdough Bread",
        imageUrl: "https://picsum.photos/seed/food2/600/600"
    },
    {
        title: "Gourmet Burger",
        imageUrl: "https://picsum.photos/seed/food3/600/600"
    },
    {
        title: "Artisan Pizza",
        imageUrl: "https://picsum.photos/seed/food4/600/600"
    }
];

const CookingSection: React.FC = () => {
    return (
        <section id="cooking" className="py-20 px-4 sm:px-8 bg-gray-900">
            <div className="w-full max-w-6xl mx-auto text-center">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    From Code to Cuisine
                </motion.h2>
                <motion.p 
                    className="font-mono text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    When I'm not crafting pixels, I'm crafting flavors. Here's a taste of my culinary adventures.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <PhotoCard {...photo} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CookingSection;
