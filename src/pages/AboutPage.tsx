
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-anandwan-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About Anandwan
              </h1>
              <p className="text-xl mb-6 max-w-lg text-anandwan-50">
                A community rehabilitation center founded by Baba Amte in 1949,
                dedicated to the treatment, rehabilitation, and empowerment of
                people affected by leprosy.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img
                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Anandwan community"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-anandwan-950 mb-6">
                Our Mission
              </h2>
              <p className="text-anandwan-700 mb-4">
                To create a self-reliant community where people affected by
                leprosy can live with dignity, independence, and purpose through
                rehabilitation, skill development, and meaningful work
                opportunities.
              </p>
              <p className="text-anandwan-700 mb-6">
                We believe in turning disability into opportunity by focusing on
                abilities rather than limitations, and by creating an inclusive
                environment that nurtures growth and independence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-anandwan-600">
                  <Heart className="h-5 w-5" />
                  <span>Compassionate Care</span>
                </div>
                <div className="flex items-center gap-2 text-anandwan-600">
                  <Users className="h-5 w-5" />
                  <span>Inclusive Community</span>
                </div>
                <div className="flex items-center gap-2 text-anandwan-600">
                  <Leaf className="h-5 w-5" />
                  <span>Self-Reliance</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-anandwan-950 mb-6">
                Our Vision
              </h2>
              <p className="text-anandwan-700 mb-4">
                To create a world where people affected by leprosy and other
                disabilities are fully integrated into society, with equal
                access to opportunities, education, healthcare, and employment.
              </p>
              <p className="text-anandwan-700">
                We envision a future where the stigma associated with leprosy is
                eliminated, and where every individual can contribute to society
                based on their unique abilities and talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Our Founder
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              The inspiring story of Baba Amte and his vision for Anandwan.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Baba_Amte.jpg/800px-Baba_Amte.jpg"
                alt="Baba Amte"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-anandwan-950 mb-4">
                Murlidhar Devidas "Baba" Amte (1914-2008)
              </h3>
              <p className="text-anandwan-700 mb-4">
                Baba Amte was a renowned social worker and activist who dedicated
                his life to serving those affected by leprosy. Born into a wealthy
                family, he gave up a lucrative legal career to work with the
                most marginalized members of society.
              </p>
              <p className="text-anandwan-700 mb-4">
                In 1949, he established Anandwan (Forest of Joy) on barren land
                in Maharashtra, creating a self-sufficient community where people
                affected by leprosy could live with dignity, work productively,
                and contribute to society.
              </p>
              <p className="text-anandwan-700">
                His philosophy of "work builds, charity destroys" formed the
                foundation of Anandwan, emphasizing the importance of
                self-reliance and meaningful work over dependency and charity.
                For his humanitarian work, Baba Amte received numerous awards,
                including the Ramon Magsaysay Award, the Templeton Prize, and
                the Gandhi Peace Prize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Anandwan Today */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Anandwan Today
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              From its humble beginnings, Anandwan has grown into a vibrant
              community with multiple initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                  Healthcare & Rehabilitation
                </h3>
                <p className="text-anandwan-700 mb-4">
                  Anandwan provides medical treatment, physical rehabilitation,
                  and supportive care for people affected by leprosy and other
                  disabilities.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare at Anandwan"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                  Education & Skill Development
                </h3>
                <p className="text-anandwan-700 mb-4">
                  Through schools, vocational training centers, and workshops,
                  Anandwan equips community members with education and practical
                  skills for self-reliance.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Education at Anandwan"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                  Sustainable Enterprises
                </h3>
                <p className="text-anandwan-700 mb-4">
                  The community operates various enterprises including
                  agriculture, handicrafts, furniture making, and more, providing
                  employment and generating income.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1591087079993-ccd70d297742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable enterprises at Anandwan"
                  className="rounded-lg h-40 w-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Connect Initiative */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Anandwan Careers Connect Initiative
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Extending our mission beyond the community by connecting
              rehabilitated individuals with employment opportunities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-anandwan-950 mb-4">
                  Bridging the Gap
                </h3>
                <p className="text-anandwan-700 mb-4">
                  Anandwan Careers Connect is our latest initiative to extend
                  employment opportunities beyond our community. We bridge the
                  gap between rehabilitated individuals with valuable skills and
                  employers seeking dedicated workers.
                </p>
                <p className="text-anandwan-700 mb-6">
                  Our platform showcases the abilities and talents of people who
                  have overcome significant challenges, focusing on what they
                  can do rather than their limitations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-anandwan-500 hover:bg-anandwan-600"
                  >
                    <Link to="/job-seekers">For Job Seekers</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-anandwan-500 text-anandwan-700 hover:bg-anandwan-50"
                  >
                    <Link to="/employers">For Employers</Link>
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1586553480870-6c5b6b3b4e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Job seekers and employers connecting"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-anandwan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-anandwan-50 mb-8 max-w-2xl mx-auto">
            Whether you're looking for employment opportunities or want to hire
            dedicated workers, you can be part of our mission to create a more
            inclusive society.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-anandwan-600 hover:bg-anandwan-50"
            >
              <Link to="/" className="flex items-center gap-2">
                Back to Home <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
