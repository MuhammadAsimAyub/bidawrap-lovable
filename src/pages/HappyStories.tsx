import { useState } from "react";
import Layout from "@/components/Layout";
import { Star } from "lucide-react";

const HappyStories = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const stories = [
    {
      id: 1,
      name: "Sarah Mitchell",
      rating: 5,
      story: "I was nervous about wrapping my Tesla, but the shop made everything so easy! The color change wrap exceeded my expectations. It's been 8 months and still looks brand new. Everyone asks where I got it done!",
    },
    {
      id: 2,
      name: "James Rodriguez",
      rating: 5,
      story: "Got my BMW wrapped in matte black and I'm obsessed! The installer was patient with all my questions and the attention to detail was incredible. Worth every penny. Bidawrap connected me with the perfect shop.",
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 5,
      story: "PPF installation was flawless! My white Porsche stays pristine even after daily driving. The shop was professional, clean, and finished on time. I received 5 competitive bids and chose the best one. Great experience!",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      rating: 5,
      story: "Wrapped my food truck with custom graphics through Bidawrap. The design and installation were phenomenal. My sales increased by 60% in the first month! The platform made finding the right shop stress-free.",
    },
    {
      id: 5,
      name: "Isabella Santos",
      rating: 5,
      story: "Chrome delete and window tint for my Range Rover. The transformation is stunning! The shop was recommended through Bidawrap and they delivered beyond expectations. Professional, affordable, and beautiful work.",
    },
    {
      id: 6,
      name: "David Park",
      rating: 5,
      story: "Full PPF coverage on my brand new Corvette. The installer took their time and did it perfectly. Not a single bubble or edge lift. Protected my investment and the car looks even better now!",
    },
    {
      id: 7,
      name: "Olivia Thompson",
      rating: 5,
      story: "Satin wrap on my Audi gave it a completely new personality! I got multiple bids through Bidawrap and saved over $1,500 compared to other quotes. The quality is outstanding and the process was so simple.",
    },
    {
      id: 8,
      name: "Carlos Mendez",
      rating: 5,
      story: "Commercial wrap for my three delivery vans. The team finished all vehicles in one week and they look incredible. My brand visibility has skyrocketed. Bidawrap made it easy to find verified professionals.",
    },
    {
      id: 9,
      name: "Sophia Anderson",
      rating: 5,
      story: "Color change wrap from white to deep blue on my Mercedes. It's like driving a brand new car! The shop was meticulous and the finish is showroom quality. I get compliments everywhere I go.",
    },
    {
      id: 10,
      name: "Ryan Foster",
      rating: 5,
      story: "PPF and ceramic coating combo for my Mustang GT. The protection is incredible and the shine is unreal. Found the perfect shop through Bidawrap with transparent pricing. Best decision I made!",
    },
    {
      id: 11,
      name: "Mia Williams",
      rating: 5,
      story: "Wrapped my G-Wagon in rose gold chrome and it's absolutely stunning! The installer was an artist. Took their time to get every curve perfect. Worth the wait and the investment. Highly recommend Bidawrap!",
    },
    {
      id: 12,
      name: "Alex Turner",
      rating: 5,
      story: "Full vehicle wrap for my business with custom logo design. The shop handled everything from concept to installation. My mobile billboard is turning heads everywhere. Revenue is up 45% since the wrap!",
    },
    {
      id: 13,
      name: "Hannah Lee",
      rating: 5,
      story: "Gloss black wrap on my Jeep Wrangler looks aggressive and clean! The shop was recommended by Bidawrap and they were amazing. Professional, fast, and the quality exceeded my expectations.",
    },
    {
      id: 14,
      name: "Daniel Brooks",
      rating: 5,
      story: "PPF on the front end of my Lamborghini. Rock chips are no longer a concern! The installation was perfect and invisible. The shop's expertise gave me total confidence. Found them through Bidawrap's verified network.",
    },
    {
      id: 15,
      name: "Victoria Martinez",
      rating: 5,
      story: "Wrapped my Lexus in pearlescent white and it changes color in different lighting! Absolutely magical. The craftsmanship was top-tier and the price was competitive. Bidawrap connected me with true professionals.",
    },
    {
      id: 16,
      name: "Nathan Cooper",
      rating: 5,
      story: "Full wrap and window tint package for my Camaro. The transformation is insane! From boring to breathtaking. Got 6 bids through Bidawrap and chose the best value. The shop delivered perfection!",
    },
  ];

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Happy Customer Stories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from customers who found their perfect shop through Bidawrap
            </p>
            <p className="text-sm text-primary mt-4 font-semibold">
              Click on any card to read the full story!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flip-card h-80 cursor-pointer"
                onClick={() => toggleFlip(story.id)}
              >
                <div
                  className={`flip-card-inner ${
                    flippedCards.includes(story.id) ? "flipped" : ""
                  }`}
                >
                  {/* Front Side - Image */}
                  <div className="flip-card-front">
                    <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center p-6 group hover:border-primary/50 transition-colors">
                      <div className="text-6xl mb-4">🚗</div>
                      <p className="text-sm text-muted-foreground text-center">
                        Car image placeholder
                      </p>
                      <p className="text-xs text-primary mt-2 font-semibold">
                        Click to read story
                      </p>
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm font-bold">{story.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Back Side - Story */}
                  <div className="flip-card-back">
                    <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary/30 rounded-xl p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg">{story.name}</h3>
                          <div className="flex gap-0.5">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-primary fill-primary"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          "{story.story}"
                        </p>
                      </div>
                      <p className="text-xs text-primary mt-4 font-semibold text-center">
                        Click to see image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of happy customers who found their perfect wrap shop through Bidawrap
            </p>
            <button className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Get Your Free Bid Today
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card:hover .flip-card-front {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Layout>
  );
};

export default HappyStories;