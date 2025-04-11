
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building, Users, ArrowRight, HandHeart } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-anandwan-950 mb-6 leading-tight">
                Empowering Lives Through Meaningful Employment
              </h1>
              <p className="text-xl text-anandwan-800 mb-8 max-w-lg">
                Connecting rehabilitated individuals from Anandwan with
                compassionate employers for a more inclusive workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-anandwan-500 hover:bg-anandwan-600"
                >
                  <Link to="/job-seekers">Find a Job</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-anandwan-500 text-anandwan-700 hover:bg-anandwan-50"
                >
                  <Link to="/employers">Post a Job</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="People collaborating"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Anandwan Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              About Anandwan
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Founded by Baba Amte, Anandwan is a community rehabilitation center in
              Maharashtra, India, dedicated to the treatment, rehabilitation, and
              empowerment of people affected by leprosy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 bg-anandwan-50 p-3 w-fit rounded-full">
                  <HandHeart className="h-6 w-6 text-anandwan-600" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Compassionate Care
                </h3>
                <p className="text-anandwan-700">
                  Providing medical treatment and rehabilitation services to those
                  affected by leprosy in a dignified environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 bg-anandwan-50 p-3 w-fit rounded-full">
                  <Users className="h-6 w-6 text-anandwan-600" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Community Building
                </h3>
                <p className="text-anandwan-700">
                  Creating a self-sustaining community where everyone contributes
                  according to their abilities and talents.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 bg-anandwan-50 p-3 w-fit rounded-full">
                  <Briefcase className="h-6 w-6 text-anandwan-600" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Skills Development
                </h3>
                <p className="text-anandwan-700">
                  Equipping rehabilitated individuals with vocational skills to
                  lead productive and self-reliant lives.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-anandwan-500 text-anandwan-700 hover:bg-anandwan-50"
            >
              <Link to="/about" className="flex items-center gap-2">
                Learn more about Anandwan <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              How It Works
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Our platform connects job seekers with inclusive employers through
              a simple process designed to highlight skills and abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-anandwan-700">
                      Job seekers can register and create a profile highlighting
                      their skills, experience, and job preferences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                      Browse Opportunities
                    </h3>
                    <p className="text-anandwan-700">
                      Explore job listings from inclusive employers who value
                      diversity and are committed to equal opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                      Apply & Connect
                    </h3>
                    <p className="text-anandwan-700">
                      Apply for positions that match your skills and connect with
                      employers who see your potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  className="bg-anandwan-500 hover:bg-anandwan-600"
                >
                  <Link to="/job-seekers">Register as Job Seeker</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                    Join as an Employer
                  </h3>
                  <p className="text-anandwan-700">
                    Create a company profile and share your commitment to
                    building an inclusive workforce.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                    Post Job Opportunities
                  </h3>
                  <p className="text-anandwan-700">
                    List positions within your organization that are suitable for
                    our talented pool of job seekers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                    Find Great Talent
                  </h3>
                  <p className="text-anandwan-700">
                    Review applications, connect with candidates, and hire
                    dedicated individuals who will enrich your team.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  className="bg-anandwan-500 hover:bg-anandwan-600"
                >
                  <Link to="/employers">Register as Employer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-anandwan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Mission for Inclusive Employment
          </h2>
          <p className="text-anandwan-50 mb-8 max-w-2xl mx-auto">
            Whether you're looking for employment opportunities or want to hire
            dedicated workers, Anandwan Careers Connect is here to bridge the gap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-anandwan-600 hover:bg-anandwan-50"
            >
              <Link to="/job-seekers">For Job Seekers</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-anandwan-700"
            >
              <Link to="/employers">For Employers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
