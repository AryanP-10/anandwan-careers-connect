
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, Users, Clock, ArrowRight } from "lucide-react";

const EmployersPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-anandwan-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Connect with Dedicated & Skilled Talent
              </h1>
              <p className="text-xl mb-8 max-w-lg text-anandwan-50">
                Join our community of inclusive employers and access a diverse
                pool of rehabilitated individuals with valuable skills and
                strong work ethic.
              </p>
              <Button
                size="lg"
                className="bg-white text-anandwan-600 hover:bg-anandwan-50"
              >
                Post a Job
              </Button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Diverse workplace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Why Hire from Anandwan?
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Our candidates bring unique strengths, perspectives, and
              dedication to every workplace they join.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Dedicated Workers
                </h3>
                <p className="text-anandwan-700">
                  Our candidates demonstrate exceptional commitment, resilience,
                  and appreciation for employment opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Diverse Talent Pool
                </h3>
                <p className="text-anandwan-700">
                  Access a range of skills from data entry and customer service
                  to handicrafts and manufacturing expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <Building className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Social Impact
                </h3>
                <p className="text-anandwan-700">
                  Make a meaningful difference in society by providing
                  opportunities to individuals overcoming significant challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post a Job Section */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Post a Job Opportunity
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Share details about the position you're looking to fill, and we'll
              connect you with qualified candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="border-anandwan-100">
                <CardHeader>
                  <CardTitle>Job Posting Form</CardTitle>
                  <CardDescription>
                    Fill in the details below to create your job listing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Enter company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" placeholder="Enter job title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, State" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobType">Job Type</Label>
                      <Input id="jobType" placeholder="Full-time, Part-time, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the job responsibilities, requirements, etc."
                        rows={6}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accommodations">
                        Accommodations Provided (if any)
                      </Label>
                      <Textarea
                        id="accommodations"
                        placeholder="Describe any workplace accommodations offered..."
                        rows={3}
                      />
                    </div>
                    <Button className="w-full bg-anandwan-500 hover:bg-anandwan-600">
                      Post Job
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-anandwan-900 mb-4">
                  How the Process Works
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-anandwan-900 mb-1">
                        Register Your Company
                      </h4>
                      <p className="text-anandwan-700">
                        Create a company profile with information about your
                        organization and commitment to inclusive hiring.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-anandwan-900 mb-1">
                        Post Job Opportunities
                      </h4>
                      <p className="text-anandwan-700">
                        List positions that match the skills available in our
                        talent pool, with clear requirements and expectations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-anandwan-900 mb-1">
                        Review Applicants
                      </h4>
                      <p className="text-anandwan-700">
                        Browse through qualified candidates who apply to your
                        job posting and connect directly with potential hires.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-anandwan-200 flex items-center justify-center text-anandwan-700 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-anandwan-900 mb-1">
                        Hire Great Talent
                      </h4>
                      <p className="text-anandwan-700">
                        Complete the hiring process and welcome dedicated
                        individuals to your team, with support from our platform
                        as needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-anandwan-100 bg-anandwan-600 text-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Employer Support
                  </h3>
                  <p className="mb-4">
                    We provide guidance and support throughout the hiring
                    process to ensure a successful match between employers and
                    job seekers.
                  </p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-anandwan-700 w-full"
                  >
                    Contact Our Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              What Employers Say
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Hear from companies that have hired through our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-anandwan-200 flex items-center justify-center">
                    <Building className="h-6 w-6 text-anandwan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-1">
                      GreenTech Solutions
                    </h3>
                    <p className="text-anandwan-600 mb-4">
                      Manufacturing Company
                    </p>
                    <p className="text-anandwan-700">
                      "We've hired three employees through Anandwan Careers
                      Connect, and they've been exceptional additions to our
                      team. Their attention to detail and dedication has
                      improved our production quality."
                    </p>
                    <p className="mt-2 text-anandwan-600">
                      - Rajesh Sharma, HR Director
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-anandwan-200 flex items-center justify-center">
                    <Building className="h-6 w-6 text-anandwan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-1">
                      Sunrise Handicrafts
                    </h3>
                    <p className="text-anandwan-600 mb-4">
                      Artisanal Products Company
                    </p>
                    <p className="text-anandwan-700">
                      "The artisans we've hired through this platform bring
                      incredible skill and creativity to our business. Their
                      life experiences translate into unique designs that our
                      customers love."
                    </p>
                    <p className="mt-2 text-anandwan-600">
                      - Priya Patel, Founder
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-anandwan-950 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-anandwan-700 mb-8 max-w-2xl mx-auto">
            Join our community of inclusive employers and discover talented
            individuals who will add value to your organization.
          </p>
          <Button
            size="lg"
            className="bg-anandwan-500 hover:bg-anandwan-600"
          >
            Register as an Employer
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EmployersPage;
