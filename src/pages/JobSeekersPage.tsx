
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Briefcase, GraduationCap, Award } from "lucide-react";

const JobSeekersPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-anandwan-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find Your Perfect Job Opportunity
              </h1>
              <p className="text-xl mb-8 max-w-lg text-anandwan-50">
                Create your profile, showcase your skills, and connect with
                inclusive employers who value your talents and abilities.
              </p>
            </div>
            <div className="md:w-1/3">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-anandwan-600 text-white rounded-t-lg">
                  <CardTitle>Register as a Job Seeker</CardTitle>
                  <CardDescription className="text-anandwan-100">
                    Create your profile in minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <Button className="w-full bg-anandwan-500 hover:bg-anandwan-600">
                      Register Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Creation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Create Your Professional Profile
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Showcase your skills, experience, and job preferences to stand out
              to potential employers.
            </p>
          </div>

          <Tabs defaultValue="personal" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
              <TabsTrigger value="preferences">Job Preferences</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="p-4 border rounded-md mt-4">
              <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                Personal Information
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">About Yourself</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell employers a bit about yourself..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, State" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" placeholder="Enter your mobile number" />
                  </div>
                </div>
                <Button className="bg-anandwan-500 hover:bg-anandwan-600">
                  Save & Continue
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="skills" className="p-4 border rounded-md mt-4">
              <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                Skills & Experience
              </h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., Customer Service, Data Entry, Handicrafts..."
                  />
                  <p className="text-sm text-anandwan-600">
                    Separate skills with commas
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Work Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your previous work experience..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Textarea
                    id="education"
                    placeholder="List your educational background..."
                    rows={4}
                  />
                </div>
                <Button className="bg-anandwan-500 hover:bg-anandwan-600">
                  Save & Continue
                </Button>
              </form>
            </TabsContent>
            <TabsContent
              value="preferences"
              className="p-4 border rounded-md mt-4"
            >
              <h3 className="text-xl font-semibold text-anandwan-900 mb-4">
                Job Preferences
              </h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTypes">Job Types</Label>
                  <Input
                    id="jobTypes"
                    placeholder="e.g., Full-time, Part-time, Remote..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industries">Preferred Industries</Label>
                  <Input
                    id="industries"
                    placeholder="e.g., Manufacturing, Retail, Hospitality..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accommodations">
                    Accommodations (if needed)
                  </Label>
                  <Textarea
                    id="accommodations"
                    placeholder="Describe any workplace accommodations you may need..."
                    rows={4}
                  />
                </div>
                <Button className="bg-anandwan-500 hover:bg-anandwan-600">
                  Complete Profile
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-anandwan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Benefits of Joining Our Platform
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              We're dedicated to helping you find meaningful employment
              opportunities that match your skills and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Inclusive Employers
                </h3>
                <p className="text-anandwan-700">
                  Connect with companies committed to diversity and inclusion in
                  their hiring practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <Briefcase className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Job Matching
                </h3>
                <p className="text-anandwan-700">
                  Our platform suggests job opportunities that align with your
                  skills, experience, and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="mb-4 text-anandwan-500">
                  <GraduationCap className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-anandwan-900 mb-2">
                  Skill Development
                </h3>
                <p className="text-anandwan-700">
                  Access resources and opportunities to enhance your skills and
                  improve your employability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anandwan-950 mb-4">
              Success Stories
            </h2>
            <p className="text-anandwan-700 max-w-2xl mx-auto">
              Hear from individuals who found meaningful employment through our
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-anandwan-200 flex items-center justify-center">
                    <span className="text-anandwan-600 font-bold">RP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-1">
                      Rahul Patil
                    </h3>
                    <p className="text-anandwan-600 mb-4">
                      Data Entry Specialist
                    </p>
                    <p className="text-anandwan-700">
                      "After completing my rehabilitation at Anandwan, I was
                      unsure about my future. Through this platform, I found a
                      job that values my attention to detail and typing skills.
                      I'm now financially independent and proud of my
                      contribution."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anandwan-100">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-anandwan-200 flex items-center justify-center">
                    <span className="text-anandwan-600 font-bold">SK</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-anandwan-900 mb-1">
                      Sunita Kamble
                    </h3>
                    <p className="text-anandwan-600 mb-4">
                      Handicraft Artisan
                    </p>
                    <p className="text-anandwan-700">
                      "My skills in handicrafts helped me secure a position with
                      a fair-trade company. The platform made it easy to
                      showcase my work, and now I'm part of a team that values
                      my creativity and craftsmanship."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button className="bg-anandwan-500 hover:bg-anandwan-600">
              Register & Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekersPage;
