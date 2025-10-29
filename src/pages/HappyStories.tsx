const HappyStories = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      service: "Full Vehicle Wrap",
      rating: 5,
      review: "Amazing service! The team was professional and the wrap looks incredible. My business has seen a 40% increase in visibility.",
    },
    {
      id: 2,
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      service: "PPF Installation",
      rating: 5,
      review: "Best decision I made for my new car. The paint protection film is invisible and gives me peace of mind. Highly recommend!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      service: "Window Tinting",
      rating: 5,
      review: "Professional work and competitive pricing. The tint looks great and makes driving so much more comfortable.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Happy Customer Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from customers who found their perfect shop through WrapBid
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story) => (
            <div key={story.id} className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.service}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>

              <p className="text-muted-foreground">{story.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyStories;
