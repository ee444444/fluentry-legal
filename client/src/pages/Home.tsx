import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CheckCircle, Globe, Shield, Users } from "lucide-react";
import { Streamdown } from "streamdown";

const termsContent = `# Terms of Service for Fluentry

**Last Updated: December 04, 2025**

Welcome to Fluentry! These Terms of Service ("Terms") govern your use of our application and services (collectively, the "Service"), which is designed to help users automate the creation and posting of educational content.

By using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.

## 1. Use of the Service

Fluentry provides a platform to generate, manage, and publish content to social media platforms like TikTok. You are responsible for the content you create and publish through our Service and for complying with the terms of service of any third-party platform (like TikTok) you use in conjunction with our Service.

## 2. User Accounts

To use certain features of the Service, you may need to connect your social media accounts. You grant us permission to access your account for the purpose of providing the Service. You are responsible for all activities that occur under your account.

## 3. Content

You retain ownership of the content you create. By using the Service to publish content, you grant the respective social media platforms a license to use that content in accordance with their terms.

We are not responsible for the content posted by users and do not endorse any opinions expressed via the Service.

## 4. Intellectual Property

The Service and its original content (excluding content created by users), features, and functionality are and will remain the exclusive property of Fluentry and its licensors. 

## 5. Termination

We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

## 6. Disclaimers

Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.

## 7. Limitation of Liability

In no event shall Fluentry, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.

## 8. Governing Law

These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Fluentry operates, without regard to its conflict of law provisions.

## 9. Contact Us

If you have any questions about these Terms, please contact us at: **support@fluentry.com**`;

const privacyContent = `# Privacy Policy for Fluentry

**Last Updated: December 04, 2025**

This Privacy Policy describes how Fluentry ("we," "us," or "our") collects, uses, and discloses your information when you use our application and services (the "Service").

## 1. Information We Collect

We may collect information that you provide directly to us, as well as information that is automatically collected when you use our Service.

*   **Information You Provide:** This includes information you provide when you create an account, connect your social media profiles (such as TikTok), or communicate with us. This may include your name, email address, and social media profile information.
*   **Information from Third-Party Services:** When you connect a third-party account like TikTok to our Service, we will receive information from that service, such as your username, profile information, and an authorization token to act on your behalf. We only request the minimum necessary permissions to provide the Service.
*   **Usage Information:** We automatically collect information about your interactions with our Service, such as the features you use and the actions you take.

## 2. How We Use Your Information

We use the information we collect for various purposes, including to:

*   Provide, maintain, and improve our Service.
*   Automate the posting of content to your connected social media accounts as directed by you.
*   Communicate with you, including responding to your comments, questions, and requests.
*   Monitor and analyze trends, usage, and activities in connection with our Service.

## 3. How We Share Your Information

We do not share your personal information with third parties except in the following circumstances:

*   **With Your Consent:** For example, when you direct us to post content to your TikTok account.
*   **With Service Providers:** We may share your information with third-party vendors and service providers who need access to your information to carry out work on our behalf (e.g., cloud hosting).
*   **For Legal Reasons:** We may disclose your information if we believe that disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.

## 4. Data Security

We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.

## 5. Your Choices

You may update, correct, or delete information about you at any time by logging into your account. You can also disconnect your social media accounts from our Service at any time.

## 6. Contact Us

If you have any questions about this Privacy Policy, please contact us at: **support@fluentry.com**`;

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Fluentry Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-primary tracking-tight">Fluentry</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#legal" className="hover:text-primary transition-colors">Legal</a>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-white to-white -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Now Automating TikTok & Facebook
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
                Learn English. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                  Improve Your Future.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                One-to-one online lessons with an experienced TESOL-certified teacher. 
                Automate your learning journey with daily tips, vocabulary, and motivation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-secondary/50">
                  View Curriculum
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-primary opacity-20 blur-3xl rounded-full" />
              <Card className="relative border-0 shadow-2xl bg-white/90 backdrop-blur overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Students learning" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-medium text-lg">"Fluentry changed my career path completely."</p>
                    <p className="text-sm opacity-80 mt-1">- Sarah M., Software Engineer</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Fluentry?</h2>
            <p className="text-muted-foreground">
              We combine expert teaching with smart technology to help you master English faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-teal-500" />,
                title: "Expert Curriculum",
                desc: "Structured lessons designed by TESOL-certified professionals."
              },
              {
                icon: <Globe className="h-8 w-8 text-teal-500" />,
                title: "Global Community",
                desc: "Connect with learners from around the world and practice daily."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
                title: "Automated Progress",
                desc: "Smart tools to track your vocabulary and grammar improvements."
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-secondary/30">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Legal & Privacy</h2>
            <p className="text-muted-foreground mt-2">Transparency is core to our values.</p>
          </div>

          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <Tabs defaultValue="terms" className="w-full">
              <div className="border-b px-6 pt-6 bg-slate-50/50">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-6">
                  <TabsTrigger value="terms">Terms of Service</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                </TabsList>
              </div>
              
              <CardContent className="p-0">
                <ScrollArea className="h-[600px] w-full p-8">
                  <TabsContent value="terms" className="mt-0">
                    <div className="prose prose-slate prose-headings:text-primary prose-a:text-teal-600 max-w-none">
                      <Streamdown>{termsContent}</Streamdown>
                    </div>
                  </TabsContent>
                  <TabsContent value="privacy" className="mt-0">
                    <div className="prose prose-slate prose-headings:text-primary prose-a:text-teal-600 max-w-none">
                      <Streamdown>{privacyContent}</Streamdown>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Fluentry Logo" className="h-8 w-8 object-contain brightness-0 invert" />
                <span className="text-xl font-bold">Fluentry</span>
              </div>
              <p className="text-primary-foreground/70 max-w-xs">
                Empowering students worldwide to master English through technology and expert guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Lessons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#legal" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#legal" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2025 Fluentry. All rights reserved.</p>
            <div className="flex gap-4">
              <Users className="h-4 w-4" />
              <span>Made for learners everywhere</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
