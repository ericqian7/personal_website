
import React from 'react';
import { motion } from 'framer-motion';
import PhotoCard from './PhotoCard';
import meditate from '../images/meditate.jpg'
const photos = [
    {
        title: "Outdoor Climb",
        imageUrl: "https://picsum.photos/seed/climb1/600/600"
    },
    {
        title: "Gym Session",
        imageUrl: "https://picsum.photos/seed/climb2/600/600"
    },
    {
        title: "Mountain View",
        imageUrl: meditate
    },
    {
        title: "Chalking Up",
        imageUrl: "https://picsum.photos/seed/climb4/600/600"
    }
];

const BoulderingSection: React.FC = () => {
    return (
        <section id="bouldering" className="py-20 px-4 sm:px-8 bg-gray-900">
            <div className="w-full max-w-6xl mx-auto text-center">
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Reaching New Heights
                </motion.h2>
                <motion.p 
                    className="font-mono text-lg text-gray-300 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Beyond the screen, I find my challenges on the wall. Bouldering is my meditation and my workout.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
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

export default BoulderingSection;
