import Layout from "@/components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">About WrapBid</h1>
            <p className="text-xl text-muted-foreground">
              Connecting vehicle owners with trusted wrap and detailing professionals
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-8 card-hover">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
              alt="Team working"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              WrapBid was founded with a simple goal: make it easy for vehicle owners to find the best
              wrap, tint, and detailing services at competitive prices. We believe in transparency,
              quality, and connecting people with professionals who truly care about their craft.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform eliminates the guesswork by letting you submit one request and receive
              multiple competitive bids from verified shops in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Verified Shops</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Bids Completed</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
