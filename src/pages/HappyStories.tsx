import { useState } from "react";
import Layout from "@/components/Layout";
import { Star } from "lucide-react";
import { useBiddingForm } from "@/contexts/BiddingFormContext";

const HappyStories = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const { openForm } = useBiddingForm();


  const stories = [
    {
      id: 1,
      name: "Michael Carter",
      rating: 5,
      story:
        "Posting a bid was so quick! Within hours, I started receiving offers from verified wrap shops. The whole process felt transparent and smooth.",
      image: "/car-14.png",
    },
    {
      id: 2,
      name: "Emily Johnson",
      rating: 5,
      story:
        "I loved how easy it was to compare offers. The website layout is clean, and I could see ratings, portfolios, and prices before deciding.",
      image: "/car7.png",
    },
    {
      id: 3,
      name: "Lucas Bennett",
      rating: 5,
      story:
        "Bidawrap made the entire process effortless. I received multiple offers, countered one, and confirmed the deal the same day. Excellent system!",
      image: "/car-22.png",
    },
    {
      id: 4,
      name: "Sophie Martin",
      rating: 5,
      story:
        "The platform feels professional. The shops are responsive, polite, and clearly experienced. I had my wrap scheduled within 24 hours of posting.",
      image: "/car-4.png",
    },
    {
      id: 5,
      name: "Ethan Miller",
      rating: 5,
      story:
        "Everything about Bidawrap feels seamless. From signing up to accepting a bid — it’s designed perfectly. Definitely recommending to friends.",
      image: "/car-5.png",
    },
    {
      id: 6,
      name: "Olivia Thompson",
      rating: 5,
      story:
        "I was amazed at how quickly I got professional responses. The website is super user-friendly and clear. Loved the bidding system!",
      image: "/car-6.png",
    },
    {
      id: 7,
      name: "Noah Williams",
      rating: 5,
      story:
        "I appreciated the transparency — I could negotiate with multiple shops and choose based on quality and pricing. Smooth experience!",
      image: "/car-25.png",
    },
    {
      id: 8,
      name: "Chloe Davis",
      rating: 5,
      story:
        "Customer support was very responsive and guided me through my first bid. The process was fast, and the result was better than I expected!",
      image: "/car-8.png",
    },
    {
      id: 9,
      name: "James Anderson",
      rating: 5,
      story:
        "Posting a bid took less than a minute. Got 4 offers from verified shops. Accepted one easily — the platform really works as promised!",
      image: "/car-24.png",
    },
    {
      id: 10,
      name: "Isabella Moore",
      rating: 5,
      story:
        "This platform saves so much time. No endless searching or calling — just bids, reviews, and options in one place. Super professional.",
      image: "/car-10.png",
    },
    {
      id: 11,
      name: "Henry Walker",
      rating: 5,
      story:
        "I really liked the bidding system. It gives fair competition between shops, and I got a great deal without any hidden costs.",
      image: "/car-11.png",
    },
    {
      id: 12,
      name: "Amélie Laurent",
      rating: 5,
      story:
        "Everything from login to booking was smooth. The website feels modern and trustworthy. Excellent job from the Bidawrap team!",
      image: "/car-12.png",
    },
    {
      id: 13,
      name: "Jack Robinson",
      rating: 5,
      story:
        "I’ve used many online services, but Bidawrap stands out. The shops communicate professionally, and I loved the tracking updates.",
      image: "/car-13.png",
    },
    {
      id: 14,
      name: "Charlotte Dupont",
      rating: 5,
      story:
        "Loved the experience! The platform made everything so convenient. I got my wrap done on time with full clarity from start to finish.",
      image: "/car-22.png",
    },
    {
      id: 15,
      name: "Liam Parker",
      rating: 5,
      story:
        "Posting a bid, reviewing offers, chatting with shops — everything works perfectly. The whole process feels automated yet personal.",
      image: "/car-23.png",
    },
    {
      id: 16,
      name: "Emma Wilson",
      rating: 5,
      story:
        "Bidawrap is an amazing idea! It connects you with real professionals without any hassle. The platform is simple, modern, and reliable.",
      image: "/car-3.png",
    },
    {
      id: 17,
      name: "Daniel Roberts",
      rating: 4,
      story:
        "I was surprised by how quickly I got multiple offers for my wrap job. The entire process was smooth, and I ended up saving money too!",
      image: "/car-1.png",
    },
    {
      id: 18,
      name: "Sophia Turner",
      rating: 5,
      story:
        "Absolutely loved my experience with Bidawrap! The team helped me find a professional who did an incredible job on my car wrap.",
      image: "/car-2.png",
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
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">
              Happy Customer Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from customers who found their perfect shop
              through Bidawrap
            </p>
            <p className="text-sm text-primary mt-4 font-semibold">
              Click on any card to read the full story!
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flip-card h-80 cursor-pointer"
                onClick={() => toggleFlip(story.id)}
              >
                <div
                  className={`flip-card-inner ${flippedCards.includes(story.id) ? "flipped" : ""
                    }`}
                >
                  {/* Front Side - Car Image */}
                  <div className="flip-card-front">
                    <div className="relative w-full rounded-xl border-2 border-dashed border-primary/30 overflow-hidden group hover:border-primary/50 transition-colors bg-background">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-64 object-full rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                        <p className="text-sm">Click to read story</p>
                      </div>
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
              Join thousands of happy customers who found their perfect wrap shop
              through Bidawrap
            </p>
            <button
              onClick={openForm}
              className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Get a Bid
            </button>

          </div>
        </div>
      </div>

      {/* Flip Card CSS */}
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
